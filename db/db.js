const mongoose = require("mongoose");
require("dotenv").config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("Base de datos conectada");
  } catch {
    console.log("no se pudo conectar a la base de datos");
  }
};

module.exports = { DBConnection };
