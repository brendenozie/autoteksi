import Blocked from "../models/Blocked.js";

export const createBlocked = async (req, res, next) => {
  const newBlocked = new Blocked(req.body);

  try {
    const savedBlocked = await newBlocked.save();
    res.status(200).json(savedBlocked);
  } catch (err) {
    next(err);
  }
};
export const updateBlocked = async (req, res, next) => {
  try {
    const updatedBlocked = await Blocked.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlocked);
  } catch (err) {
    next(err);
  }
};
export const deleteBlocked = async (req, res, next) => {
  try {
    await Blocked.findByIdAndDelete(req.params.id);
    res.status(200).json("Blocked has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getVehicle = async (req, res, next) => {
  try {
    const Blocked = await Blocked.findById(req.params.id);
    res.status(200).json(Blocked);
  } catch (err) {
    next(err);
  }
};
export const getBlocked = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Blockeds = await Blocked.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Blockeds);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Blocked.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const BlockedCount = await Blocked.countDocuments({ type: "Blocked" });
    const apartmentCount = await Blocked.countDocuments({ type: "apartment" });
    const resortCount = await Blocked.countDocuments({ type: "resort" });
    const villaCount = await Blocked.countDocuments({ type: "villa" });
    const cabinCount = await Blocked.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Blocked", count: BlockedCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getBlockedRooms = async (req, res, next) => {
  try {
    const Blocked = await Blocked.findById(req.params.id);
    const list = await Promise.all(
      Blocked.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
