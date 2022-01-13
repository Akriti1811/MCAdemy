import { Fragment } from "react";
function RChapter(props)
{
    
    return(
        <div>{props.chapter}</div>   
        );
}

export function getStaticPaths(){
    return{
        fallback: false,
        paths:[
            { params:{chapter:'one-word'}},{ params:{chapter:'figure-counting'}}
        ]
    }
}

export async function getStaticProps(context){

   const chapter = context.params.chapter;
   console.log(chapter);


    return {
        props:{
            chapter:chapter
        }
    }
}

export default RChapter;