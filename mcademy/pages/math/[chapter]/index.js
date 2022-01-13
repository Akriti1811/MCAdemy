import { Fragment } from "react";
function MChapter(props)
{
    
    return(
        <div>{props.chapter}</div>   
        );
}

export function getStaticPaths(){
    return{
        fallback: false,
        paths:[
            { params:{chapter:'hyperbola'}},{ params:{chapter:'parabola'}}
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

export default MChapter;