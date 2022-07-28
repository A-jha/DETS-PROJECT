import nextConnect from "next-connect";
// import data from "../../utils/data";
import db from "../../utils/db";
import Student from "../../models/Student";
import data from "../../utils/data";
const handler = nextConnect();

handler.get(async (req, res) => {
  await db.connect();
  await Student.deleteMany(); // delete all records
  await Student.insertMany(data.students);
  await db.disconnect();
  res.send({ message: "Seeded Successfully" });
});

export default handler;
