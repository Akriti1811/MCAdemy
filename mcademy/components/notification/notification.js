import { useEffect } from 'react';
import classes from './notification.module.css'

 function NotificationComponent (props){


    async function fetchDetails(){

        const response = await fetch('/api/notification',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
    
        const data  = await response.json();
        console.log(data);
    }

    useEffect(() =>{
        fetchDetails();
    },[])

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