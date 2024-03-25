var express = require("express");
var cors = require("cors");
var apartmentRoutes = require("./Backend/Routes/apartmentsRoutes");
var app = express();
app.use(cors());
//Routes
app.use("/apartments", apartmentRoutes);
module.exports = app;
