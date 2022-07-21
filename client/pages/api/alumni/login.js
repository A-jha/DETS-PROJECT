import nextConnect from "next-connect";
import db from "../../../utils/db";
import Student from "../../../models/Student";
import signToken from "../../../utils/auth";
import createSlug from "../../../utils/slug";
import { compareSync } from "bcrypt";

const handler = nextConnect();

handler.post(async (req, res) => {
  await db.connect();
  console.log(req.body, "api");
  const student = await Student.findOne({ email: req.body.email }); // delete all records
  await console.log(student ? "student Found" : "Student Not Found");
  await db.disconnect();
  if (student && compareSync(req.body.password, student.password)) {
    console.log("lol");
    const token = signToken(student) ?? "";
    console.log(token ? "Token Generated" : "Not");
    res.send({
      token,
      _id: student._id,
      name: student.name,
      email: student.email,
      isAdmin: student.isAdmin,
      slug: createSlug(student.name),
    });
  } else {
    res.status("401").send({
      message: "Invalid User Or Password",
    });
  }
});

export default handler;
