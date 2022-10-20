import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    usertype: {
      type: String,
    },
    isOnline: {
      type: String,
      default: false,
    },
    dateRegistered: {
      type: String,
    },
    ranking: {
      type: Number,
      min: 0,
      max: 5,
    },
    country: {
      type: String,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
