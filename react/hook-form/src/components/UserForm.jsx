import React, {useState} from 'react';

const UserForm = (props) => {

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confpassword,setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstname,lastname,email,password,confpassword};
        
    }






    return(
        <div>
        <form>
            <div>
                <label>First Name:</label>
                <input value = {firstname} onChange = {(e) => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input value = {lastname} onChange = {(e) => setLastname(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input value = {password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input value = {confpassword} onChange = {(e) => setConfPassword(e.target.value)}/>
            </div>
            {firstname}
        </form>
        <div>
        <h5>Your Form Data</h5>
        <h5>First Name: {firstname}</h5>
        <h5>Last Name: {lastname}</h5>
        <h5>Email: {email}</h5>
        <h5>Password: {password}</h5>
        <h5>Confirm Password: {confpassword}</h5>
        </div>
        </div>
        
)};
export default UserForm;