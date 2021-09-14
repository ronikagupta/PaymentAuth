import { Satellite } from "@material-ui/icons"
import { Add_To_Cart, Remove_To_Cart } from "../Constants"
const initialState = {
    cardData: [],
    totalPrice: 0
}

export default function cardItems(state = initialState, action) {
    debugger
    switch (action.type) {
        case Add_To_Cart:
            console.warn('reducer', action)
            state.totalPrice = action.payload.title + state.totalPrice
            state.cardData.push(action.payload)
            return {
                ...state
            }



        case Remove_To_Cart:
            state.totalPrice = state.totalPrice - action.payload.data
            state.cardData.splice(action.payload.index, 1);

            return {
                ...state
            }


        default:
            return state
    }
}