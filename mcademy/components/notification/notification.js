import classes from './notification.module.css'

function NotificationComponent (props){


   

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