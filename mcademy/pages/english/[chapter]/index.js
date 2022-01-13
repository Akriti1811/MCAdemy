import { Fragment } from "react";
function EChapter(props)
{
    
    return(
        <div>{props.chapter}</div>   
        );
}

export function getStaticPaths(){
    return{
        fallback: false,
        paths:[
            { params:{chapter:'antonym'}},{ params:{chapter:'synonym'}}
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

export default EChapter;