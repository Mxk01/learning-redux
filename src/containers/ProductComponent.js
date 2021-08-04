import React from 'react'
import {useSelector} from 'react-redux'
function ProductComponent() {
    // check products listing console logs
    const products = useSelector((state)=>state.allProducts.products);
    // to use data from redux store after we used use selector which returns the state
    // destructure


    let {title,id} = products[0];
    return (
        <div className="four column wide">
            <h1>Product Component</h1>
            <div className="ui link cards">
                <div className="card">
                    <div className="page">
                        <div className="image"></div>
                        <div className="content">
                            <div className="header">{title}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
