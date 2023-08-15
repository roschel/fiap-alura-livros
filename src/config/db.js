import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@warm-up-node-express.ahdcahz.mongodb.net/alura-node?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true`
);

let db = mongoose.connection;

export default db;
