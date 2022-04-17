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
    const usersCollection = db.collection("Users");
    const result = await usersCollection.findOne(data);
    console.log(result);
    res.send(result);

    if (result) {
      res.status(200).json({ message: "user Found" });
    } else {
      res.status(200).json({ message: "user not Found" });
    }
    client.close();
  }
}
export default handler;
