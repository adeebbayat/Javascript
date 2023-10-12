import React, {useState} from 'react';
import {useNavigate, Link,Navigate} from 'react-router-dom';
import axios from 'axios';
import './style.css'
export default () => {
    
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const onSubmitHandler = e  =>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/authors',{
            name
        })
        .then(res => {
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

    return (
        <div className="form">
            <form onSubmit={onSubmitHandler}>
                <h1>Favorite Author</h1>
                <Link to={"/"}>Home</Link>
                <h3>Add a new author:</h3>
                <div className="box">
                    <h2>Name:</h2>
                    <textarea cols = "25" rows="3"onChange={(e)=>setName(e.target.value)} value = {name}></textarea>
                    <div className="buttons">
                        <button className="button" onClick={navigate("/")}>Cancel</button>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

