import React, {useState} from 'react';

const Form = (props) => {

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confpassword,setConfPassword] = useState("");

    const [firstnameError,setFirstNameError] = useState("")
    const [lastnameError,setLastNameError] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters")
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters")
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters")
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        
    }

    const handleConfPassword = (e) =>{
        setConfPassword(e.target.value);
        if(password != confpassword || e.target.value.length < 8){
            setPasswordError("Passwords must match and be at least 8 characters.")

        }
        else{
            setPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstname,lastname,email,password,confpassword};
        
    }






    return(
        <div>
        <form>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">First Name:</span>
                <input type="text" value = {firstname} onChange = {handleFirstName} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <p>{firstnameError}</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Last Name:</span>
                <input value = {lastname} onChange = {handleLastName} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <p>{lastnameError}</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Email:</span>
                <input value = {email} onChange = {handleEmail} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <p>{emailError}</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                <input value = {password}  onChange = {handlePassword} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Confirm Password:</span>
                <input value = {confpassword} onChange = {handleConfPassword} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <p>{passwordError}</p>
        </form>
        </div>
    )
        

}
export default Form