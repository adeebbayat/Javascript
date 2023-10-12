import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AuthorList = (props) =>{
    const {removeFromDom} = props;

    const deleteAuthor = (authorId) =>{
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then(res => {
            removeFromDom(authorId)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            {props.authors.map((author,i) =>
            <tr>
                <td>{author.name}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            )}
            </table>
        </div>
    )
}

export default AuthorList;