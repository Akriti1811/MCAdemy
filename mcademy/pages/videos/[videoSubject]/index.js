import { Fragment } from "react";
import  Navbar from "../../../components/navbar/navbar";
import MaterialList from "../../../components/materialList/materialList";
function Video(props)
{
    
    return(
        <div>
            <Navbar />
            <MaterialList />
            
        </div>   
        );
}

export function getStaticPaths(){

const list = [
    "Maths",
    "Reasoning",
    "English",
    "Computer",
  ];
  
    return{
        fallback: false,
        paths:list.map((data) =>({
          params:{videoSubject:data},
        }))
    }
}

export async function getStaticProps(context){

   const video = context.params.videoSubject;
    return {
        props:{
            video:video
        }
    }
}

export default Video;