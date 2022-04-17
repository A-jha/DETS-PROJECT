import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    //const {firstName,lastName,email, password, confirmPassword} = data;
    const client = await MongoClient.connect(
      //this is an api route so code will never come on the client side
      "mongodb+srv://avinash:detsConnect@cluster0.ctscs.mongodb.net/detsDB?retryWrites=true&w=majority"
    );
    const db = client.db();
    const usersCollection = db.collection("Notice");
    const result = await usersCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Notice Inserted" });
  }
}
export default handler;
