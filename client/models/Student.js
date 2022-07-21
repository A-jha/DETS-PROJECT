import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "This email Already Exist"],
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  stream: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  yearIn: {
    type: String,
    required: true,
  },
  yearOut: {
    type: String,
    required: true,
  },
  social: [
    {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
  jobs: [
    {
      title: {
        type: String,
      },
      companyName: {
        type: String,
      },
      Joining: {
        type: String,
      },
    },
  ],
  gender: {
    type: String,
    default: "Others",
  },
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
