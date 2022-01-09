import classes from './Navbar.module.css'

function navbar (){

   

    return(
        
            <div className={classes.row}>
                <div className={classes.colten}>
                <h1><span className={classes.logo}>MCA</span><span className={classes.logo2}>demy</span></h1>
                </div>
                <div className={classes.coltwo}>
                 <button className={classes.button}>Login</button>
                </div>
            </div>
       
    )


}

export default navbar;