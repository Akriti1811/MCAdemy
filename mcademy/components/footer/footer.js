import classes from '../home/Home.module.css'
export default function Footer(){

    return(
<div className={classes.row}>
<div className={classes.colthree2}>
<h1><span className={classes.logo}>MCA</span><span className={classes.logo2}>demy</span></h1>

</div>
<div className={classes.colthree2}>
    <h4>Company</h4>
    <p>Notification</p>
    <p>About Us</p>
    <p>Contact Us</p>
    <p>Weekly Assistant Schedule</p>
   
</div>
<div className={classes.colthree2}>
<h4>Other Links</h4>
    <p>Login</p>
    <p>Signup</p>
    <p>Forgot Password</p>
</div>
<div className={classes.colthree2}>
    <h4>Popular Goals</h4>
    <p>NIMCET</p>
    <p>JAMIA</p>
    <p>AIMCA</p>
  
</div>
</div>
    );

}