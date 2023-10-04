import React, {useState} from 'react';

const ListDisplay = (props) => {

    const[isChecked,setIsChecked] = useState(false);
    
    return(
        <div className='flex'>
            {isChecked == true ? <h1 className='lineThrough'>{props.task.task}</h1> : <h1>{props.task.task}</h1>}
            <input type="checkbox" onChange={e => setIsChecked(e.target.checked)}/>
            <button onClick = {() => props.deleteTask(props.idx)} type="submit" class="btn btn-primary button" >Delete</button>
            
        </div>
    )
}
export default ListDisplay