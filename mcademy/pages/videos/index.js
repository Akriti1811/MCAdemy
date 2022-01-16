import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import classes from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const list = [
    "Maths",
    "Reasoning",
    "English",
    "Computer",
  ];
  
 function VideoMain(props){
    const router = useRouter();

    function getVideo(event){
        console.log(event.target.textContent);
        router.push(`videos/${event.target.textContent}`)

    }
  return (
    <>
      <Navbar isLogin={true} />
      <div className={classes.row}>
        {list.map((data) => (

          <div  className={classes.colthree}  onClick={getVideo}>{data}</div>
        ))}
      </div>
    </>
  );
}

export default VideoMain;
