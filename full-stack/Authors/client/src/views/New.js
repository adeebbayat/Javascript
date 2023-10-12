import React, {useEffect,useState} from 'react'
import AuthorForm from '../components/AuthorForm'

const New = (props) =>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);




    return (
        <div>
            <AuthorForm/>
        </div>
    )
}
export default New;