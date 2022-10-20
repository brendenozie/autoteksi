import Trips from "../models/Vehicle.js";
import Room from "../models/Room.js";

export const createTrips = async (req, res, next) => {
  const newTrips = new Trips(req.body);

  try {
    const savedTrips = await newTrips.save();
    res.status(200).json(savedTrips);
  } catch (err) {
    next(err);
  }
};
export const updateTrips = async (req, res, next) => {
  try {
    const updatedTrips = await Trips.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTrips);
  } catch (err) {
    next(err);
  }
};
export const deleteTrips = async (req, res, next) => {
  try {
    await Trips.findByIdAndDelete(req.params.id);
    res.status(200).json("Trips has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getVehicle = async (req, res, next) => {
  try {
    const Trips = await Trips.findById(req.params.id);
    res.status(200).json(Trips);
  } catch (err) {
    next(err);
  }
};
export const getTrips = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Tripss = await Trips.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Tripss);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Trips.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const TripsCount = await Trips.countDocuments({ type: "Trips" });
    const apartmentCount = await Trips.countDocuments({ type: "apartment" });
    const resortCount = await Trips.countDocuments({ type: "resort" });
    const villaCount = await Trips.countDocuments({ type: "villa" });
    const cabinCount = await Trips.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Trips", count: TripsCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getTripsRooms = async (req, res, next) => {
  try {
    const Trips = await Trips.findById(req.params.id);
    const list = await Promise.all(
      Trips.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
