import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://joaomroschel:52naAk1KJq9iqfdc@warm-up-node-express.ahdcahz.mongodb.net/alura-node?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true"
);

let db = mongoose.connection;

export default db;
