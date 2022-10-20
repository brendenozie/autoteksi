import mongoose from "mongoose";
const VehcileSchema = new mongoose.Schema({
  vehicleMake: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  yearManufactured: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  seats: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Boolean,
    default: false,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Vehicle", VehcileSchema)