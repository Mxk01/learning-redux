// importing actions
import {ActionTypes} from '../constants/action-types'

let {
    SET_PRODUCTS,
    SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT
} = ActionTypes;


//  (II) action = object that has action type and payload
// E.G COOK_FOOD
// payload:ingredients 

export const setProducts = (products) =>{
    return {
    type:SET_PRODUCTS,
    payload:products
    }
}

export const selectedProducts = (product) => {
    return {
      type:ActionTypes.SELECTED_PRODUCT,
      payload:product

    }
}