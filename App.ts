const express = require("express");
const apartmentRoutes = require("./src/app/Backend/Routes/apartmentsRoutes.js");

const app = express();

//Routes
app.use("/apartments", apartmentRoutes);

export default app;
