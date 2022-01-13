import classes from './question.module.css';
import {useRouter} from 'next/router'
import {useState} from 'react';
function InsertQuestion(){






 const router = useRouter();

  const [question,setQuestion] = useState("");
  const [o1,setO1] = useState("");
  const [o2,setO2] = useState("");
  const [o3,setO3] = useState("");
  const [o4,setO4] = useState("");
  const [answer,setAnswer] = useState("");
  const [subject,setSubject] = useState("");
  const [chapter,setChapter] = useState("");
  const [source,setSource] = useState("");


   async function InsertToDb() {

       

       if(question.length != 0 && o1.length != 0 && o2.length != 0 && o3.length != 0 && o4.length != 0 && answer.length != 0 && subject.length != 0 && chapter.length != 0 && source.length != 0)
       {
          const queData = {
              question,o1,o2,o3,o4,answer,subject,chapter,source
          }
        
          
          
        const response = await fetch('/api/insertquestion',{
            method:'POST',
            body:JSON.stringify(queData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data  = await response.json();
        console.log(data);

       
       
        
    }
    else{
         window.alert("All field must contain value");
           
       }
    }

       


        

    return(
        <>
        <div className={classes.row}>
            <div className={classes.colnine}>

             <div className={classes.marg}>
             <input className={classes.input} type="text"   placeholder="Question" onChange={(e) => setQuestion(e.target.value)}/>
             </div>
             <div className={classes.marg}>
             <input className={classes.input} type="text"   placeholder="Option 1..." onChange={(e) => setO1(e.target.value)}/>
             </div>
             <div className={classes.marg}> 
             <input className={classes.input} type="text"   placeholder="Option 2..." onChange={(e) => setO2(e.target.value)}/>
             </div>
             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="Option 3..." onChange={(e) => setO3(e.target.value)} />
             </div>

             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="Option 4..." onChange={(e) => setO4(e.target.value)}/>
             </div>

             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="Answer" onChange={(e) => setAnswer(e.target.value)}/>
             </div>

             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
             </div>

             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="Chapter"onChange={(e) => setChapter(e.target.value)}/>
             </div>
               
             <div className={classes.marg}>
             <input  className={classes.input} type="text"  placeholder="Source" onChange={(e) => setSource(e.target.value)}/>
             </div>
               
            </div>
            <div className={classes.coltwo}>
                <button className={classes.button} onClick={InsertToDb}> Add Questions </button>
            </div>

        </div>
        </>
    )
}

export default InsertQuestion;