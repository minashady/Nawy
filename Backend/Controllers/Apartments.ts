import { Request, Response } from "express";
import { Double } from "mongodb";
import { db } from "../Config/db";

const ApartmentModel = require("../Models/apartmentsModels");

//let Db: db;

export async function getApartments(req: Request, res: Response) {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const location = req.body.location;
  const price = new Double(req.body.rating);
  const compound = req.body.compound;
  const developer = req.body.developer;
  

  const newCourse = new ApartmentModel({
    name,
    description,
    image,
    location,
    price,
    compound,
    developer,
  });

  newCourse
    .save()
    .then(() => res.json("Course created!"))
    .catch((err: Error) => res.status(400).json("Error: " + err));
}

export async function createApartment(req: Request, res: Response) {
  // Your code here
}

export async function updateApartment(req: Request, res: Response) {
  // Your code here
}

export async function searchApartment(req: Request, res: Response) {
  const { query } = req.query;

  try {
    const apartments = await db
      .collection("apartments")
      .find({ name: { $regex: new RegExp(query as string, "i") } })
      .toArray();
    res.json(apartments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while searching apartments");
  }
}
