import { MongoClient } from "mongodb";
import Connection from "./connection";
export default async function Handler(req, res) {

   
  if (req.method == "GET") {

    const uri = "mongodb+srv://MCAdemy:MCAdemy@cluster0.ixzs8.mongodb.net/demo?retryWrites=true&w=majority";
    const check = await MongoClient.connect(uri);
    const db = check.db();
    const data = db.collection("contact");
    const result =  await data.find().toArray();
    check.close();
    res.send(result);
    
  }


}
