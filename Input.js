import React, {useState} from 'react'



const Input = (props) =>{
    const [state, setState] = useState("")
    return(
        <div className = "signin">
           <label htmlFor = "fname">{props.label}:</label> <br></br>
            {/* <input type= "text" id ="fname" name = "fname"  placeholder = {props.placeholder} /> */}
            <input value = {state} onChange={(e) => setState(e.target.value)} id ="fname" name = "fname"  placeholder = {props.placeholder} />
        </div>
    )
}

export default Input