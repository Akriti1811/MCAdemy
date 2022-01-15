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
    const result = await data.findOne({number},{upsert:true});
     if(result == null)
     {
        const result2 = await data.insertOne(json,{upsert:true});  
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
           console.log(error);
    }

    
    check.close();
    res.send({ name: "j" });

  }
  if (req.method == "GET") {
    const check = await Connection();


    const db = check.db();
    const data = db.collection("profile");
    const number = req.body;
    console.log(number);
    try{
    const result = await data.findOne({number});
    
     res.send(result);
    }
    catch(error)
    {
           console.log(error);
    }

    
    check.close();
    res.send({ name: "j" });
  }

}
