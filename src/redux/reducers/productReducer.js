import {ActionTypes} from '../constants/action-types'

// declare initial state
const initialState = {
    products:[{
        id:1,
        title:'Dipesh',
        category:'programmer'
    }]
};
 // reducer function takes in a state and an action
export const productReducer = (state,{type,payload}) => {
 switch(type) 
 {
     // based on what type of action it is return something
   case ActionTypes.SET_PRODUCTS:
       return state;
    default:
        return state;
 }
}


/*Same as 
Destructured type and payload

export const productReducer = (state,action) => {
 switch(action.type) 
 {
   case SET_PRODUCTS:
    break; 
 }
}



*/