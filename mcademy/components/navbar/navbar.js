import classes from './Navbar.module.css'
import Login from './login';
import { useState } from 'react';


function navbar (props){

   const [show,setShow] = useState(false); 
   function onClickLogin(){
   setShow(!show);
   }

   function searchOnClick(){
       window.alert("search on click");
   }

    return(
        
            <div className={classes.row}>
                <div className={classes.colnine}>
                <h1><span className={classes.logo}>MCA</span><span className={classes.logo2}>demy</span></h1>
                </div>
                 
                 {
               
                 !props.isLogin && <div className={classes.colthree}>
                 <button onClick={onClickLogin} className={classes.button}>Login</button>
                 </div>

                 }

                 {
                   props.isLogin && 
                   <div className={classes.colthree}>
                   <img onClick={searchOnClick} className={classes.fix} src="https://www.pngitem.com/pimgs/m/179-1799665_notification-icon-png-facebook-notification-bell-icon-transparent.png" />
                   <img className={classes.fix} src="https://cdn0.iconfinder.com/data/icons/web-basics-2/24/search-512.png" />
                   <img className={classes.fix} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H8wXJZcYknD-v3qhjeQtmSHyOvln3-YLwg&usqp=CAU" />
                   </div>
                 }

                 <Login shows={show}/>
            </div>
       
    )


}

export default navbar;