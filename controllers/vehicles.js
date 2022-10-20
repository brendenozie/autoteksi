import Vehicles from "../models/Vehicle.js";

export const createVehicles = async (req, res, next) => {
  const newVehicles = new Vehicles(req.body);

  try {
    const savedVehicles = await newVehicles.save();
    res.status(200).json(savedVehicles);
  } catch (err) {
    next(err);
  }
};
export const updateVehicles = async (req, res, next) => {
  try {
    const updatedVehicles = await Vehicles.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedVehicles);
  } catch (err) {
    next(err);
  }
};
export const deleteVehicles = async (req, res, next) => {
  try {
    await Vehicles.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicles has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getVehicle = async (req, res, next) => {
  try {
    const Vehicles = await Vehicles.findById(req.params.id);
    res.status(200).json(Vehicles);
  } catch (err) {
    next(err);
  }
};
export const getVehicles = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Vehicless = await Vehicles.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Vehicless);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Vehicles.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const VehiclesCount = await Vehicles.countDocuments({ type: "Vehicles" });
    const apartmentCount = await Vehicles.countDocuments({ type: "apartment" });
    const resortCount = await Vehicles.countDocuments({ type: "resort" });
    const villaCount = await Vehicles.countDocuments({ type: "villa" });
    const cabinCount = await Vehicles.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Vehicles", count: VehiclesCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getVehiclesRooms = async (req, res, next) => {
  try {
    const Vehicles = await Vehicles.findById(req.params.id);
    const list = await Promise.all(
      Vehicles.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
