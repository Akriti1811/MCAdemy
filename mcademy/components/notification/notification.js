import classes from '../navbar/Navbar.module.css'

function NotificationComponent (props){

    console.log(props);
    console.log("cehc");
   

    return(
        
            <div className={classes.row}>
               <div className={classes.coleight}>
                <p>{props.notice}</p>
                <p>{props.link}</p>
               </div>
            </div>
       
    )


}

export default NotificationComponent;