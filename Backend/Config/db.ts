import dotenv from "dotenv";
import { MongoClient, Db, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.MongoURI;

if (!uri) {
  throw new Error('Please define the MongoURI environment variable');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db: Db;

async function run() {
  try {
    await client.connect();
    db = client.db("nawy");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);

export { db };
