import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./style.css"
export default () => {
    
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    
    const onSubmitHandler = e => {

        e.preventDefault();
        
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            navigate("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
        })
    }

    //onChange to update firstName and lastName
    return (
        <div className="wholeThing">
            <h1>Product Manager</h1>
        <div className="form">
            <form onSubmit={onSubmitHandler}>

            {errors.map((err, index) => <p style = {{color:'red'}}key={index}>{err}</p>)}

                <p>
                    <label>Title</label><br/>
                    <input className="text" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input className="text" type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input className="text" type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input className = "submit" type="submit" value="Create"/>
            </form>
        </div>
        </div>
    )
}

