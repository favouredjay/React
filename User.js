import React from 'react'

const User = (props) => {
    return (
        <div className="one">
            <img src = {props.src} width = {props.width} height = {props.height}/>
            <div>
                <p>name : {props.name}</p>
                <p>gender : {props.gender}</p>
                <p>Cohort : {props.Cohort}</p>
                <p>Hobby: {props.Hobby}</p>
            </div>
            <button id = "btn">delete user</button>
        </div>
    )
}

export default User
