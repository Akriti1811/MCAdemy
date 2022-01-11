import classes from './Navbar.module.css'
import Login from './login';
import { useState } from 'react';

function navbar (){

   const [show,setShow] = useState(false); 
   function onClickLogin(){
   setShow(!show);
   }

    return(
        
            <div className={classes.row}>
                <div className={classes.colnine}>
                <h1><span className={classes.logo}>MCA</span><span className={classes.logo2}>demy</span></h1>
                </div>
                <div className={classes.colthree}>
                 <button onClick={onClickLogin} className={classes.button}>Login</button>
                </div>

                 <Login shows={show}/>
            </div>
       
    )


}

export default navbar;