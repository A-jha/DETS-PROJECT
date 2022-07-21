import nextConnect from "next-connect";
import db from "../../../utils/db";
import Admin from "../../../models/Admin";
import signToken from "../../../utils/auth";
import createSlug from "../../../utils/slug";
import { compareSync } from "bcrypt";

const handler = nextConnect();

handler.post(async (req, res) => {
  await db.connect();
  console.log(req.body, "api");
  const admin = await Admin.findOne({ email: req.body.email }); // delete all records
  await console.log(admin ? "admin Found" : "admin Not Found");
  await db.disconnect();
  if (admin && compareSync(req.body.password, admin.password)) {
    console.log("lol");
    const token = signToken(admin) ?? "";
    console.log(token ? "Token Generated" : "Not");
    res.send({
      token,
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      slug: createSlug(admin.name),
    });
  } else {
    res.status("401").send({
      message: "Invalid User Or Password",
    });
  }
});

export default handler;
