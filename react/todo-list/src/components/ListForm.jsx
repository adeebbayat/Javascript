import React, {useState} from 'react';
import './styles.css'


const ListForm = (props) => {

    const[task,setTask] = useState([]);
    
    const submitHandler = (e) =>{
        e.preventDefault();
        const newTask = {
            task:task
        }
        props.changeState(newTask)
    }
    const clearInput = () =>{
        let inputValue = document.getElementById("input");
        inputValue.value = "";
    }

    return(
        <div>
            <form onSubmit = {submitHandler}>
                <div className='flex'>
                <input id = 'input' onChange ={(e) => setTask(e.target.value)} />
                <button type="submit" onClick = {clearInput} class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}
export default ListForm