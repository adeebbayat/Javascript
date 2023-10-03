import react, {useState} from 'react';
import './styles.css';



const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newBox = {
            color: color
        }
        props.changeState(newBox)
        
        
    }
    const clearInput = () =>{
        let inputValue = document.getElementById("input");
        inputValue.value = "";
        console.log(inputValue);
    }
    return(
        <form onSubmit = {submitHandler}>
            <div className='flex'>
            <h1>Color</h1>
            <input id = 'input' onChange = {e => setColor(e.target.value)} />
            <button onClick = {clearInput} type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    )
}
export default BoxForm