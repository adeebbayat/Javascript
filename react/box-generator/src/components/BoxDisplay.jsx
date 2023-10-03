import React from 'react';
import './styles.css'
const BoxDisplay = (props) =>{
    return(
        <div className='flex'>
            <div className = 'square' style = {{backgroundColor: props.box.color}}>
                
            </div>
        </div>
    )
}
export default BoxDisplay