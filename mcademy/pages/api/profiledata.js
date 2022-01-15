import { MongoClient } from "mongodb";
import Connection from "./connection";
export default async function Handler(req, res) {
  if (req.method == "POST") {
    const check = await Connection();
    const number = req.body;
    const db = check.db();
    console.log(number);
    const data = db.collection("profile");
    const result = await data.findOne({number});
    check.close();
    console.log(result);
    res.send(result);
  }

}
