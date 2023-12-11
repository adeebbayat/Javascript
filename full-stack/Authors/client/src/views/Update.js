import React, {useState,useEffect} from 'react';
import {useNavigate, Link,Navigate,useParams} from 'react-router-dom';
import axios from 'axios';
import '../components/style.css'
export default () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => {console.log(res);navigate("/")})
            .catch(err => console.error(err));
    }

    return (
        <div className="form">
            <form onSubmit={updateAuthor}>
                <h1>Favorite Author</h1>
                <Link to={"/"}>Home</Link>
                <h3>Edit this author</h3>
                <div className="box">
                    <h2>Name:</h2>
                    {errors.map((err, index) => <p style = {{color:'red'}}key={index}>{err}</p>)}
                    <textarea cols = "25" rows="3"onChange={(e)=>setName(e.target.value)} value = {name}></textarea>
                    <div className="buttons">
                        <button className="button" onClick={() => navigate("/")}>Cancel</button>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

