import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link,useNavigate} from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            navigate("/")
        })
        .catch(err => console.log(err));
        
    }

    return (
    <>
        <div className="buttons">
        <Link to="/products">Go Back</Link>
        <Link to={"/products/"+product._id+"/edit"}>Edit</Link>
        <button onClick={(e)=>{deleteProduct(product._id)}}>
        Delete
        </button>
        </div>
        <div className="details">
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    </>
    )
}
    
export default Detail;

