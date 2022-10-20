import mongoose from "mongoose";
const BlockedSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  reasonBlocked: {
    type: String,
    required: true,
  },
  blockDate: {
    type: String,
  },
  unblockDate: {
    type: String,
  },
  blockAccount: {
    type: String,
  },
  unblockAccount: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model("Blocked", BlockedSchema)