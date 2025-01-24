// require('dotenv').config()

const mongoose = require("mongoose");
// mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on('connected', () => {
  console.log("Mongoose connected to the database!");
})
mongoose.connection.on('error', (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on('disconnected', () => {
  console.log("Mongoose connection disconnected");
});

module.exports = mongoose

