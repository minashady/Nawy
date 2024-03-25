const express =require( "express");
var router = express.Router();
const {
  getApartments,
  createApartment,
  apartmentDetails,
  searchApartment,
} = require("../Controllers/Apartments");
router.get("/getApartments", getApartments);
router.get("/search", searchApartment);
router.post("/createApartment", createApartment);
router.post("/:id", apartmentDetails);
module.exports=router;
