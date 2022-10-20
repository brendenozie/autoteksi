import express from "express";
import {
  createModel,
  deleteModel,
  getModel,
  getModels,
  updateModel,
} from "../controllers/models.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createModel);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateModel);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteModel);
//GET

router.get("/:id", getModel);
//GET ALL

router.get("/", getModels);

export default router;
