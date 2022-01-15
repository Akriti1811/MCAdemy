import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import classes from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

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
function MaterialMain(props) {
    const router = useRouter();

    function getMaterial(event){
        console.log(event.target.textContent);
        router.push(`study-material/${event.target.textContent}`)

    }
  return (
    <>
      <Navbar isLogin={true} />
      <div className={classes.row}>
        {list.map((data) => (

          <div  className={classes.colthree}  onClick={getMaterial}>{data}</div>
        ))}
      </div>
    </>
  );
}

export default MaterialMain;
