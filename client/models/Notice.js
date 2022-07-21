import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
    postedOn: {
      type: String,
      required: true,
    },
    links: [
      {
        title: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Notice = mongoose.models.Notice || mongoose.model("Notice", noticeSchema);

export default Notice;
