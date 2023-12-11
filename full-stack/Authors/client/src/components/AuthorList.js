import React from 'react';
import axios from 'axios';
import {Link,Navigate,useNavigate} from 'react-router-dom';

const AuthorList = (props) =>{
    const {removeFromDom} = props;
    const navigate = useNavigate();
    const deleteAuthor = (authorId) =>{
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then(res => {
            removeFromDom(authorId)
        })
        .catch(err => console.log(err))
    }

    const deleteProduct = (authorId) =>{
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then(res => {
            removeFromDom(authorId)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/authors/new">Add an author</Link> 
            <h2 style={{color:'purple'}}>We have quotes by:</h2>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            {props.authors.map((author,i) =>
            <tr>
                <td>{author.name}</td>
                <td>
                    <button onClick = {() => navigate(`/authors/${author._id}/edit`)}>Edit</button>
                    <button onClick={(e)=>{deleteProduct(author._id)}}>
                        Delete
                </button>
                </td>
            </tr>
            )}
            </table>
        </div>
    )
}

export default AuthorList;