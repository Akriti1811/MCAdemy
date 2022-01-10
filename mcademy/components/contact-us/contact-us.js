
import classes from './ContactUs.module.css';

function ContactUsComponent() {

    return(
        <>
        <div className={classes.row}>
            <div className={classes.colnine}>

             <div className={classes.marg}>
             <input className={classes.input} type="text"  placeholder="Name"/>
             </div>
             <div className={classes.marg}>
             <input className={classes.input} type="number"  placeholder="Mobile Number"/>
             </div>
             <div className={classes.marg}> 
             <input className={classes.input} type="email"  placeholder="Email"/>
             </div>
             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="I want to know about"/>
             </div>
               
            </div>
            <div className={classes.coltwo}>
                <button className={classes.button}> Contact Us </button>
            </div>

        </div>
        </>
    )
}

export default ContactUsComponent;