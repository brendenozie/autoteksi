import express from "express";
import {
  countByCity,
  countByType,
  createVehicles,
  deleteVehicles,
  getVehicle,
  getVehicles,
  getVehiclesRooms,
  updateVehicles,
} from "../controllers/vehicles.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createVehicles);

//UPDATE
router.put("/:id", verifyAdmin, updateVehicles);
//DELETE
router.delete("/:id", verifyAdmin, deleteVehicles);
//GET

router.get("/find/:id", getVehicle);
//GET ALL

router.get("/", getVehicles);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getVehiclesRooms);

export default router;
