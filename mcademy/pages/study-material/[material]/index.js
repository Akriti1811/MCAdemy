import { Fragment } from "react";
import  Navbar from "../../../components/navbar/navbar";
import MaterialList from "../../../components/materialList/materialList";
function Material(props)
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
  var arr;
 
    return{
        fallback: false,
        paths:list.map((data) =>({
          params:{material:data},
        }))
    }
}

export async function getStaticProps(context){

   const material = context.params.material;
    return {
        props:{
            material:material
        }
    }
}

export default Material;