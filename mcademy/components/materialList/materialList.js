import classes from './material.module.css'

const list = [
    "NCERT Books",
    "Formula Sheets",
    "Previous Year Papers",
    "NCERT Solutions",
    "Notes",
    "NCERT Books",
    "Formula Sheets",
    "Previous Year Papers",
    "NCERT Solutions",
    "Notes",
    "NCERT Books",
    "Formula Sheets",
    "Previous Year Papers",
    "NCERT Solutions",
    "Notes",
    "NCERT Books",
    "Formula Sheets",
    "Previous Year Papers",
    "NCERT Solutions",
    "Notes",
  ];

export default function MaterialList(props){

   


    return(<>
    
    
        <div className={classes.coltwelve}>

           {list.map(data =>(<p className={classes.para}>{data}</p>))}
            

        </div>
    

    </>)
}