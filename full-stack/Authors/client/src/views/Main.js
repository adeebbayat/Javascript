import React, {useEffect,useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import AuthorList from '../components/AuthorList';
import axios from 'axios';
const Main = (props) =>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);


    return (
        <div>
            {loaded && <AuthorList authors={authors}/>}
        </div>
    )
}
export default Main;