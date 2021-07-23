import React, {useState} from 'react'

const Button = (props) => {
    const btnstyle = {
        backgroundColor: props.backgroundcolor,
        color: props.color,
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        padding: props.padding,
        margin: props.margin,
        borderColor: props.borderColor,
        paddingBottom: props.paddingBottom,
        paddingTop: props.padding,
        marginTop: props.marginTop,
        marginDown: props.marginDown,
        fontWeight: props.fontWeight,

        // title: props.title,
    }
    const[state, setstate] = useState(false) 
    const updateState = () => {
        setstate(!state)
        console.log(state)
    }
    return (
    // <div> 
        <div className = "Login">
            <button style={btnstyle} onClick={updateState}>
                {props.title}
            </button>
        </div>
    //  </div> 
    )
}

export default Button
