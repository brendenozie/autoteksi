import Make from "../models/Make.js";
import Model from "../models/Model.js";

export const createMake = async (req, res, next) => {
  const newMake = new Make(req.body);

  try {
    const savedMake = await newMake.save();
    res.status(200).json(savedMake);
  } catch (err) {
    next(err);
  }
};
export const updateMake = async (req, res, next) => {
  try {
    const updatedMake = await Make.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMake);
  } catch (err) {
    next(err);
  }
};
export const deleteMake = async (req, res, next) => {
  try {
    await Make.findByIdAndDelete(req.params.id);
    res.status(200).json("Make has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getMake = async (req, res, next) => {
  try {
    const Make = await Make.findById(req.params.id);
    res.status(200).json(Make);
  } catch (err) {
    next(err);
  }
};
export const getMakes = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Makes = await Make.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Makes);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Make.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const MakeCount = await Make.countDocuments({ type: "Make" });
    const apartmentCount = await Make.countDocuments({ type: "apartment" });
    const resortCount = await Make.countDocuments({ type: "resort" });
    const villaCount = await Make.countDocuments({ type: "villa" });
    const cabinCount = await Make.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Make", count: MakeCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getMakeModels = async (req, res, next) => {
  try {
    const Make = await Make.findById(req.params.id);
    const list = await Promise.all(
      Make.models.map((make) => {
        return Model.findById(make);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
