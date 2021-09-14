import React from 'react'
import { FormComponent, FormContainer } from "react-authorize-net";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';



let clientKey = '8xac9z8BaRWSkk73xbbv4WrH7cQ5M8NZG42CAYk2cqx3zP64jUqPxJ5C7qYGt63X';
let apiLoginId = '69ph66RQBp';

export default function Authnet() {
    debugger
    console.log('formComponent', FormComponent)
    const data = useSelector((state) =>
        state.cardItems


    )
    const price = useSelector((state) =>

        state.cardItems.totalPrice


    )
    const onErrorHandler = (response) => {
        debugger
        // setState({
        //     status: ["failure", response.messages.message.map(err => err.text)]
        // });
        console.log('Hello')
    };

    const onSuccessHandler = (response, formValues) => {
        console.log("ApiResponce", response, formValues)
        debugger
        // Process API response on your backend...
        // this.setState({ status: ["failure", []] });
        axios.post("https://apitest.authorize.net/xml/v1/request.api",
            {
                "createTransactionRequest": {
                    "merchantAuthentication": {
                        "name": "69ph66RQBp",
                        "transactionKey": "23zDnMG7Q46UKu5P"
                    },
                    "refId": "123456",
                    "transactionRequest": {
                        "transactionType": "authCaptureTransaction",
                        "amount": price,
                        "payment": {
                            "creditCard": {
                                "cardNumber": "5424000000000015",
                                "expirationDate": "2025-12",
                                "cardCode": "999"
                            }
                        },
                        "lineItems": {
                            "lineItem": {
                                "itemId": "1",
                                "name": "Ronika gupta",
                                "description": "Cannes logo",
                                "quantity": "18",
                                "unitPrice": "45.00"
                            }
                        },
                        "tax": {
                            "amount": "4.26",
                            "name": "level2 tax name",
                            "description": "level2 tax"
                        },
                        "duty": {
                            "amount": "8.55",
                            "name": "duty name",
                            "description": "duty description"
                        },
                        "shipping": {
                            "amount": "4.26",
                            "name": "level2 tax name",
                            "description": "level2 tax"
                        },
                        "poNumber": "456654",
                        "customer": {
                            "id": "99999456654"
                        },
                        "billTo": {
                            "firstName": "Ronika",
                            "lastName": "Johnson",
                            "company": "Souveniropolis123",
                            "address": "14 Main Street",
                            "city": "Pecan Springs",
                            "state": "TX",
                            "zip": "44628",
                            "country": "US"
                        },
                        "shipTo": {
                            "firstName": "China",
                            "lastName": "Bayles",
                            "company": "Thyme for Tea",
                            "address": "12 Main Street",
                            "city": "Pecan Springs",
                            "state": "TX",
                            "zip": "44628",
                            "country": "US"
                        },
                        "customerIP": "192.168.1.1",
                        "transactionSettings": {
                            "setting": {
                                "settingName": "testRequest",
                                "settingValue": "false"
                            }
                        },
                        "userFields": {
                            "userField": [
                                {
                                    "name": "MerchantDefinedFieldName1",
                                    "value": "MerchantDefinedFieldValue1"
                                },
                                {
                                    "name": "favorite_color",
                                    "value": "blue"
                                }
                            ]
                        },
                        "processingOptions": {
                            "isSubsequentAuth": "true"
                        },
                        "subsequentAuthInformation": {
                            "originalNetworkTransId": "123456789NNNH",
                            "originalAuthAmount": "45.00",
                            "reason": "resubmission"
                        },
                        "authorizationIndicatorType": {
                            "authorizationIndicator": "final"
                        }
                    }
                }
            },
        )
            .then(res => {
                console.log('response', res)
            })


    };

    const handleSendPaymentInformationToAuthorizeNet = (response) => {
        console.log('response is', response);
    };
    const onFocus = (response) => {
        console.log(response)
    }
    const change = (response) => {
        console.log(response)
    }
    return (
        <div>
            <div >

                <FormContainer
                    style={{ backgroundColor: "red" }}
                    environment="sandbox"
                    onError={onErrorHandler}
                    onSuccess={onSuccessHandler}
                    amount={price}
                    component={FormComponent}
                    clientKey={clientKey}
                    apiLoginId={apiLoginId}
                    onFocus={onFocus}
                    onChange={change}
                    type="button"
                    id="paymentButton"
                    className="AcceptUI"
                    data-billingAddressOptions='{"show":true, "required":false}'
                    data-apiLoginID={
                        apiLoginId
                    }
                    data-clientKey={
                        clientKey
                    }
                    data-acceptUIFormBtnTxt="Pay now"
                    data-acceptUIFormHeaderTxt="Card Information"
                    data-paymentOptions='{"showCreditCard": true, "showBankAccount": true}'
                    data-responseHandler={(response) => {
                        handleSendPaymentInformationToAuthorizeNet(response);
                    }}
                />
                {/* <order>
                    <invoiceNumber>INV-12345</invoiceNumber>
                    <description>Golf Supplies</description>
                </order> */}

            </div>
        </div>
    )
}
