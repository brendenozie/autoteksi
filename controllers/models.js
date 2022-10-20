import Model from "../models/Model.js";
import Make from "../models/Make.js";
import { createError } from "../utils/error.js";

export const createModel = async (req, res, next) => {
  const makeId = req.params.makeid;
  const newModel = new Model(req.body);

  try {
    const savedModel = await newModel.save();
    try {
      await Make.findByIdAndUpdate(makeId, {
        $push: { rooms: savedModel._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedModel);
  } catch (err) {
    next(err);
  }
};

export const updateModel = async (req, res, next) => {
  try {
    const updatedModel = await Model.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedModel);
  } catch (err) {
    next(err);
  }
};

export const deleteModel = async (req, res, next) => {
  const modelId = req.params.modelid;
  try {
    await Model.findByIdAndDelete(req.params.id);
    try {
      await Make.findByIdAndUpdate(modelId, {
        $pull: { model: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getModel = async (req, res, next) => {
  try {
    const model = await Model.findById(req.params.id);
    res.status(200).json(model);
  } catch (err) {
    next(err);
  }
};
export const getModels = async (req, res, next) => {
  try {
    const models = await Model.find();
    res.status(200).json(models);
  } catch (err) {
    next(err);
  }
};
