import express from "express";
import {
  countByCity,
  countByType,
  createMake,
  deleteMake,
  getMake,
  getMakeModels,
  getMakes,
  updateMake,
} from "../controllers/make.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMake);

//UPDATE
router.put("/:id", verifyAdmin, updateMake);
//DELETE
router.delete("/:id", verifyAdmin, deleteMake);
//GET

router.get("/find/:id", getMake);
//GET ALL

router.get("/", getMakes);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/models/:id", getMakeModels);

export default router;
