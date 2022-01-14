import { MongoClient } from "mongodb";
import Connection from "./connection";
export default async function Handler(req, res) {
  if (req.method == "POST") {
    const check = await Connection();
    const profileData = req.body;
    var json = {};

    for (const key in profileData) {
      if (profileData[key].length != 0) {
        json[key] = profileData[key];
      }
    }
    var number = json.number;
    console.log(number);

    const db = check.db();
    const data = db.collection("profile");

    try{
    const result = await data.findOne({number});
     if(result == null)
     {
        const result2 = await data.insertOne(json);  
        console.log("result2");  
        console.log(result2);
     }
     else{
     

       const result2 = await data.findOneAndUpdate({number},{$set:json})
       console.log(result2);

     }
    }
    catch(error)
    {

    }

    
    check.close();
    res.send({ name: "j" });

  }
  if (req.method == "GET") {
    res.send({ name: "hi" });
  }
}
