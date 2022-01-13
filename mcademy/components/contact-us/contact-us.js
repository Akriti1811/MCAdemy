
import classes from './ContactUs.module.css';
import {useState} from 'react';

function ContactUsComponent() {


    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [number,setNumber] = useState();
    const [message,setMessage] = useState();
    const [contactText,setContactText] = useState("Contact Us");


    async function InsertToDb() {

       

        if(name.length != 0 && email.length != 0 && number.length == 10 && message.length != 0 )
        {
           const contactData = {name:name,email:email,number:number,message:message}
          
           const json = JSON.stringify(contactData);
           console.log(json);
           
           
        const response = await fetch('/api/contactus',{
             method:'POST',
             body:json,
             headers:{
                 'Content-Type':'application/json'
             }
         });
     
         const data  = await response.json( );
         
         if(data.acknowledged)
         {
              setContactText("Request Added");
         }
         else{
             setContactText("Request Adding Failed")
         }
 
        
        
         
     }
     else{
          window.alert("All field must contain Right value");
            
        }
     }
 
        





    return(
        <>
        <div className={classes.row}>
            <div className={classes.colnine}>

             <div className={classes.marg}>
             <input className={classes.input} type="text"  placeholder="Name" onChange={(e) => setName(e.target.value)}/>
             </div>
             <div className={classes.marg}>
             <input className={classes.input} type="number"  placeholder="Mobile Number" onChange={(e) => setNumber(e.target.value)} />
             </div>
             <div className={classes.marg}> 
             <input className={classes.input} type="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="I want to know about" onChange={(e) => setMessage(e.target.value)} />
             </div>
               
            </div>
            <div className={classes.coltwo}>
                <button className={classes.button} onClick={InsertToDb}>{contactText} </button>
            </div>

        </div>
        </>
    )
}

export default ContactUsComponent;