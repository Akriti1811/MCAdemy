import classes from "./Navbar.module.css";
import { Transition } from "react-transition-group";
import { useState } from "react";
import auth from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

function Login(props) {


  const authToken  = useSelector(state => state.authToken);
  const dispatch = useDispatch();

  const [text, setText] = useState("Request Otp");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const widgetId = "recaptcha-container";
  const [prev,setPrev] = useState(true);
  const router = useRouter();

  function onChangeNumber(e){
    e.preventDefault();
    setNumber(e.target.value);
    setText("Request Otp");
  }

  function onClickLogin(e) {
    e.preventDefault();

    if (text === "Request Otp") {
      if (number.length == 13) {
        setPrev(false);
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {size: "invisible"},
          auth
        );
        const appVerifier = window.recaptchaVerifier;
        prev = number;
        requestOtp(number, appVerifier);
      } else {
        window.alert("Wrong Number" + number.length);
      }
    } else {
      Verification();
    }
  }


  function requestOtp(number, appVerifier) {
    signInWithPhoneNumber(auth, number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
       
        setText("Login");
        window.recaptchaVerifier= false;
      })
      .catch((error) => {
        console.log(error);
       
      });
  }


  function Verification() {
   
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;

          
          dispatch({type:"LOG IN",accessToken:user.accessToken,phoneNumber:user.phoneNumber});
          router.push('/home');
        })
        .catch((error) => {
          console.log(error);
          dispatch({type:"LOG OUT",accessToken:"",phoneNumber:""});
        });
   }

  return (
    <Transition in={props.shows} timeout={300}>
      {(state) => {
        return (
          <div
            className={classes.rowlogin}
            style={{
              transition: "all 1s ease-out",
              opacity: state === "entered" ? 1 : 0,
            }}
          >
            <div
              className={classes.colfive}
              style={{ display: state === "entered" ? "block" : "none" }}
            >
              <div className={classes.marg}>
                { prev && <input
                  className={classes.input}
                  type="text"
                  placeholder="Mobile Number"
                  onChange={onChangeNumber}
                  
                />}
                <div id="recaptcha-container"></div>

               <input
                  className={classes.input}
                  type="number"
                  placeholder="OTP...."
                  onChange={(event) => setOtp(event.target.value)}
                />

                <button
                  id="sign-in-button"
                  onClick={onClickLogin}
                  className={classes.button}
                >
                  {text}
                </button>
              </div>
            </div>

            <div
              className={classes.colfive}
              style={{ display: state === "entered" ? "block" : "none" }}
            >
              <h2>Be a Part of Largest and Strongest MCA Community</h2>
            </div>
          </div>
        );
      }}
    </Transition>
  );
}

export default Login;

