import { Fragment } from "react";
function TestNumber(props)
{
    
    return(
        <div>{props.number}</div>   
        );
}
export function getStaticPaths(){
    return{
        fallback: false,
        paths:[
            { params:{testnumber:'1'}},{ params:{testnumber:'2'}}
        ]
    }
}
export async function getStaticProps(context){

   const number = context.params.testnumber;
 
    return {
        props:{
            number:number
        }
    }
}
export default TestNumber;