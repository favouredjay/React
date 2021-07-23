import './App.css';
import Button from "./Button.js";
import './Button.css';
import Input from "./Input.js";
import './Input.css';
import './index.js';
import './index.css'

function App() {
  return (
    <div className="App">
       <div className="App-box">
         <h2>Welcome <br></br>back! </h2>
      <Input label = "Email"  placeholder =  "Enter your email" /><br></br>
      <Input label = "Password" placeholder = "Enter your password"/>
      <p className = "forget">
        <a href = "#"> Forgot your password?</a>
        </p>
        </div>
       <div className = "Login">
        <Button
         backgroundcolor = "black"
          color = "white"
          width = "310px" 
          height = "47px"
          title = "Login" 
        /> 
        </div>
        <p id= "or">
          or</p>
       <div className ="media">
         <Button
           title = "Facebook"
           width = "140px"
           height= "45px"
           backgroundcolor = "white"
           borderColor="rgba(0,0,0,0.1)"
          //  textAlign= "center"
            // padding="40px"
          //  marginTop= "20px"

         />
         <Button
         title = "Google"
         width = "140px"
         height = "45px"
         backgroundcolor = "white"
         borderColor="rgba(0,0,0,0.1)"
         textAlign= "center"
        //  padding = "35px"
        // marginTop ="20px"
         />
       </div>  
       <p id ="acount">Don't have an account?
         </p> 
      <div className = "create" >
         <Button
         title = "Create Account"
         width = "310px"
         height = "47px"
         borderColor="rgba(0,0,0,0.1)"
         fontWeight="bold"
      />
      </div>
    </div>
  );
}

export default App;
