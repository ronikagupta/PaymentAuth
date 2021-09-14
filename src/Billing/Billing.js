/* services/billing.js */

/* Convert Accept.js XmlHttpRequest to Promise */
function createPaymentAsync(data) {
    return new Promise(resolve => {
        window.Accept.dispatchData(data, resolve);
    });
}

/* Parse Accept Errors */
function parseErrors(response) {
    let i = 0
    const result = []

    while (i < response.messages.message.length) {
        result.push(`${response.messages.message[i].code}: ${response.messages.message[i].text}`)
        i += 1;
    }
    return result.join('\n');
}

/*
  Refines card/bank data before pass to Accept.js
  Warning: Accept.js slightly fails when the values are not string(ex: Integer)
    Ensure that they are String.
*/
function refinedData(data) {
    const authData = {
        clientKey: process.env.REACT_APP_AUTHNET_PUBLIC_CLIENT_KEY,
        apiLoginID: process.env.REACT_APP_AUTHNET_API_LOGIN_ID,
    }

    const newData = {}
    newData.authData = authData

    if (data.profile_type === 'card') {
        const { addressAttributes, ...cardDataWithoutAddress } = data.cardData;
        newData.cardData = cardDataWithoutAddress
        newData.cardData.cardNumber = newData.cardData.cardNumber.replace(/ /g, '')
    } else {
        newData.bankData = data.bankData
    }
    return newData
}

/* Build body to send to our API backend */
function buildRequestBody(data, acceptResponse) {
    let body = { profile_type: data.profile_type }
    const { opaqueData } = acceptResponse

    if (data.profile_type === 'card') {
        body = {
            ...body,
            opaqueData,
            card: {
                month: data.cardData.month,
                year: data.cardData.year,
                address_attributes: data.cardData.addressAttributes,
            },
        }
    } else if (data.profile_type === 'ach') {
        body = {
            ...body,
            account: data.bankData.accountNumber,
            routing: data.bankData.routingNumber,
            bank_name: data.bankData.bankName,
            account_holder: data.bankData.nameOnAccount,
            account_type: data.bankData.accountType,
        }
    }

    return body
}

export function createPayment(data) {
    return createPaymentAsync(refinedData(data)).then(response => {
        if (response.messages.resultCode === 'Error') {
            return { error: { _error: parseErrors(response) } }
        }

        /* send payment result to our backend */
        return fetchData(
            '/api/customer/v1/payments',
            {
                method: 'POST',
                body: buildRequestBody(data, response),
            },
        );
    })
}