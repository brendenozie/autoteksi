import mongoose from "mongoose";
const MakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  active: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model("Make", MakeSchema)