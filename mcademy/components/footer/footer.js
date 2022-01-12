import classes from '../home/Home.module.css'
import Link from 'next/link';
export default function Footer(){

    return(
<div className={classes.row}>
<div className={classes.colthree2}>
<Link href="/"><h1><span className={classes.logo}>MCA</span><span className={classes.logo2}>demy</span></h1></Link>

</div>
<div className={classes.colthree2}>
    <h4>Company</h4>
    <Link href="/notification"><p>Notification</p></Link>
    <Link href="/about-us"><p>About Us</p></Link>
    <Link href="/contact-us"><p>Contact Us</p></Link>
    <Link href="/weekly-assistant-schedule"><p>Weekly Assistant Schedule</p></Link>
   
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