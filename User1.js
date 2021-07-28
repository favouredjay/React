import React from 'react'
import User from './User'
import './User1.css'
import download from "./assets/download.jpg"
import downloads from "./assets/med.jpg"
import t from "./assets/downloader.jpg"
import q from "./assets/downloading.jpg"


const User1 = () => {
    return (
        <div>
            <div >
                <User src = {download}
                      name = "Isaac" 
                      gender = "male"
                      Cohort = "6"
                      Hobby = "Talking"
                      width = "110px"/>

                     
                </div>
                <br></br>
             <div>
                <User src = {downloads}
                      name = "Sarah"
                      gender = "female"
                      Cohort = "6"
                      Hobby = "Reading"
                      width = "110px"/>
               
             </div>   
            <br></br>
             <div>
                <User src = {t}
                      name = "Francis"
                      gender = "male"
                      Cohort = "6"
                      Hobby = "Being Annoying"
                      width = "110px"/>
             </div>  
             <br></br>
             <div>
                <User src = {q}
                      name = "Glory"
                      gender = "female"
                      Cohort = "9"
                      Hobby = "Farting"
                      width = "110px"
                      height = "100px"/>

               
             </div>   

                
            </div>
        
    )
}

export default User1
