import classes from "./Navbar.module.css";
import { Transition } from "react-transition-group";
import { useState } from "react";

function Login(props) {

    const [text,setText] = useState("Request Otp");
    function onClickLogin(e){
        e.preventDefault();

        
     if(text === "Request Otp")
     setText("Login");
     else
     setText("Request Otp");
    }
  return (
      <Transition in={props.shows} timeout={300}>
          {state => {

            
             return(<div className={classes.row} style={{transition:'all 1s ease-out', opacity:state === 'entered'?1:0}}>
              <div className={classes.colfive} style={{display:state==='entered'?"block":"none"}}>
                <div className={classes.marg}>
                    {console.log(state)}

                  <input
                    className={classes.input}
                    type="number"
                    placeholder="Mobile Number"
                  />

                  <input
                    className={classes.input}
                    type="number"
                    placeholder="OTP...."
                  />
                   <button onClick={onClickLogin} className={classes.button}>{text}</button>
               
                </div>
              </div>
            </div>);
              
}}
      
      </Transition>
    
  );
}

export default Login;
