import React,{useEffect} from 'react'
import axios from 'axios'
// use selector is very useful for getting our info back from
// state (VI)
import {useSelector,useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productActions'
function ProductsListing() {
    const dispatch = useDispatch();  
    const fetchProducts = async() => {
        let response = await axios.get('https://fakestoreapi.com/products')
        // dispatch action 

        // This was the setProducts actions in productActions.js 
        /*
        export const setProducts = (products) =>{
    return {
    type:SET_PRODUCTS,
    payload:products
    }
}

So payload will be  response.data 
type SET_PRODUCTS
*/  

// VII - pass data from API to setProduct to create action
//  E.g  {type:SET_PRODUCTS,payload:response.data}   -> result of  setProducts(response.data)
        dispatch(setProducts(response.data));

        // VIII. When we get the action form setProducts(response.data)
        // dispatch function will send this action to the reducer (with the updated info)
        // E.g say before it was an empty object or array
        // now it will be populated with data from api 
        // state update

        /*
        Our reducer :
export const productReducer = (state=initialState,{type,payload}) => {
 switch(type) 
 {
     // based on what type of action it is return something
   case ActionTypes.SET_PRODUCTS:

   // ...state means previous state
   // products:payload 
   // resutls from API
       return {...state,products:payload};
    default:
        return state;
 }
}


        */ 
    }
 
    // getting products from fake api 
    useEffect(()=>{

        fetchProducts();
    },[])
    fetchProducts();
    const products = useSelector((state)=>state);
     console.log(products);
    return (
        <div className="ui grid container">
                        <br />

            <h1>Product Listing</h1>
            <ProductComponent/>
        </div>
    )
}

export default ProductsListing
