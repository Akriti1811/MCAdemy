import { getStaticProps } from "../../pages/english/[chapter]";
import classes from "./Index.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { async } from "@firebase/util";

export default function Index(props) {
  const [image, setImage] = useState();
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [flag,setFlag] = useState(true);
  //const [number,setNumber] = useState();
  const [age, setAge] = useState();
  const [updateButton, setUpdateButton] = useState("Update Profile");
  const number = useSelector((state) => state.number);

  const router = useRouter();

  useEffect(() => {
    console.log("number", number);
    if (number.length == null) router.push("/");
  }, [number]);

  async function changeImage(event) {
    event.preventDefault();
    try {
      const reader = new FileReader();
      reader.onload = function (onloadevent) {
        setData(undefined);
      };
      reader.readAsDataURL(event.target.files[0]);
      const a = document.getElementById("file");
      console.log(a);
      const formData = new FormData();
      for (const file of a.files) formData.append("file", file);
      formData.append("upload_preset", "my-uploads");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/desmedw4y/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

     
      console.log(data.secure_url);
      setImage(data.secure_url);
   
      
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProfile() {
    const json = {
      name: name,
      email: email,
      age: age,
      image: image,
      number,
    };
    console.log(json);
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

   
      setUpdateButton("Profile Updated");
      getProfileData();
   
  }

  
  async function getProfileData(){
    try{
  const response = await fetch("/api/profiledata", {
    method: "POST",
    body: JSON.stringify(number),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
  setName(data.name);
  setEmail(data.email);
  setAge(data.age);
  setImage(data.image);
}
catch(error){
  console.error(error);
}
  
}



 
 



  return (
    <>
      <div className={classes.row}>
        <div className={classes.coltwelve}>
          <div className={classes.middle}>
            <h2>Hi. {name}</h2>
            <p>
              This is your profile page. You can make changes your profile.
              Others user can see your profile except your phone Number and they
              can follow you
            </p>
            <button className={classes.button} onClick={getProfileData}>
            Show Profile
          </button>
          </div>
        </div>
      
      </div>

      <div className={classes.row2}>
        <div className={classes.colsix}>
          <div className={classes.marg}>
            <input
              className={classes.input}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.marg}>
            <p className={classes.input}>{number}</p>
          </div>
          <div className={classes.marg}>
            <input
              className={classes.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.marg}>
            <input
              className={classes.input}
              type="file"
              name="file"
              id="file"
              placeholder="Upload Your Image"
              onChange={changeImage}
            />
          </div>
          <div className={classes.marg}>
            <input
              className={classes.input}
              type="text"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className={classes.button} onClick={updateProfile}>
            {updateButton}{" "}
          </button>
        </div>

        <div className={classes.colfive}>
          <img id="image" src={image} className={classes.image} />
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{age}</p>
          <div className={classes.row2}>
            <div className={classes.colfour}>
              <h4> 15 </h4>
              <h3>Followers</h3>
            </div>
            <div className={classes.colfour}>
              <h4> 15 </h4>
              <h3>Followers</h3>
            </div>
            <div className={classes.colfour}>
              <h4> 15 </h4>
              <h3>Followers</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



