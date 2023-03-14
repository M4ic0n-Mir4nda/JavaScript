import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:password@crud-node.hkf0h4t.mongodb.net/alura-node?");

const db = mongoose.connection;

export default db;
