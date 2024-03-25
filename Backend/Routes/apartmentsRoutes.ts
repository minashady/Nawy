import express from "express";
const router = express.Router();

import {
  getApartments,
  createApartment,
  updateApartment,
  searchApartment,
} from "../Controllers/Apartments";

router.get("/getApartments", getApartments);
router.get("/search", searchApartment);
router.post("/createApartment", createApartment);
router.put("/:id", updateApartment);

export default router;
