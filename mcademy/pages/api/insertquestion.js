import { MongoClient } from "mongodb";
import Connection from "./connection";
export default async function Handler(req, res) {
  if (req.method == "POST") {
    const check = await Connection();
    const queData = req.body;
    console.log(req.body);

    const db = check.db();
    const data = db.collection("questions");
    const result = await data.insertOne(queData);
    console.log(result);
    check.close();

    res.send("okk");
  }


}
