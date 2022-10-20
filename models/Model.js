import mongoose from "mongoose";
const ModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Model", ModelSchema);
