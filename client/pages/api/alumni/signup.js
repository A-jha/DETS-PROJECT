import nextConnect from "next-connect";
import db from "../../../utils/db";
import Student from "../../../models/Student";
import signToken from "../../../utils/auth";
import createSlug from "../../../utils/slug";
import { hashSync } from "bcrypt";

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    console.log(req.body, "api");
    const { name, email, stream, yearIn, yearOut, password, confPassword } =
      req.body;
    let slug = createSlug(name);
    const student = await Student.insertMany({
      name,
      email,
      stream,
      yearIn,
      yearOut,
      password,
      confPassword,
      slug,
    }); // delete all records
    await console.log(student ? "student Found" : "Student Not Found");
    await db.disconnect();
  } catch (e) {
    console.log(e.writeErrors[0].err.code);
    let code = e.writeErrors[0].err.code;
    if (code === 11000) {
      res.status("401").send({
        message: "This email Already Exist",
      });
    } else {
      res.status("401").send({
        message: "Please Check the information",
      });
    }
  }
});

export default handler;
