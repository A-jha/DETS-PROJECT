import nextConnect from "next-connect";
import Student from "../../../models/Student";
import db from "../../../utils/db";
const handler = nextConnect();

handler.get(async (req, res) => {
  const { name, company } = req.body;
  console.log(req.body);
  console.log(name, company, "lol");
  await db.connect();
  const students = await Student.find({ name, company }); // return all product
  db.disconnect();
  res.send(students);
});

export default handler;
