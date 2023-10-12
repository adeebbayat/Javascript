import React from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom';
const ProductList = (props) => {
        const {removeFromDom} = props;

        const deleteProduct = (productId) =>{
            axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
        }

    return (
        <div className="whole">
            <h1>All Products:</h1>
            
        <div className="main">
            {props.products.map( (product, i) =>
            <div key={product._id}>
                <div className="gap">
                <Link className="products" to={`/products/${product._id}`}>{product.title}</Link>
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                </button>
                </div>
            </div>
            )}
            
        </div>
        
        </div>
    )
}
    
export default ProductList;

