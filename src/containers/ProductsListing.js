import React from 'react'
// use selector is very useful for getting our info back from
// state (VI)
import {useSelector} from 'react-redux';
import ProductComponent from './ProductComponent'
function ProductsListing() {
    const products = useSelector((state)=>state);
    console.log(products);
    return (
        <div className="ui grid container">
            <h1>Product Listing</h1>
            <ProductComponent/>
        </div>
    )
}

export default ProductsListing
