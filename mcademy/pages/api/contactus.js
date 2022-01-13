import { MongoClient } from "mongodb";
import Connection from "./connection";
export default async function Handler(req, res) {

  if (req.method == "POST") {
    const check = await Connection();
    const contactData = req.body;
    console.log(contactData);

    const db = check.db();
    const data = db.collection("contact");
    const result = await data.insertOne(contactData);
    console.log(result);
    check.close();

    res.send(result);
  }


}
