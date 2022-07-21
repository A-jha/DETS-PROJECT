import nextConnect from "next-connect";
import Student from "../../../models/Student";
import db from "../../../utils/db";
const handler = nextConnect();

handler.get(async (req, res) => {
  await db.connect();
  const students = await Student.findById(req.query.id); // return all product
  db.disconnect();
  res.send(students);
});

export default handler;
