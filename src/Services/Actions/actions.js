import { Add_To_Cart, Remove_To_Cart } from '../Constants'
export const addToCart = (data) => {
    debugger
    return {
        type: Add_To_Cart,
        data: data
    }
}
export const removeToCart = (data) => {
    console.warn("action", data)
    return {
        type: Remove_To_Cart,
        data: data
    }
}