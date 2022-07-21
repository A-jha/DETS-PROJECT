import nextConnect from "next-connect";
import Feedback from "../../../models/Feedback";
import db from "../../../utils/db";
const handler = nextConnect();

handler.post(async (req, res) => {
  await db.connect();
  const { name, body } = req.body;
  console.log(name, body);
  const feedback = await Feedback.insertMany({ name, body }, () => {
    console.log("Try to Insert");
  });
  db.disconnect();
  res.send(feedback);
});

export default handler;
