const express = require("express");
const mongoose = require("mongoose");

const iconnect = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/weatherApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 1000,
    })
    .then(console.log("Database connected"))
    .catch((err) => {
      console.log(err);
    });
};
const con = mongoose.connection;
con.on("open", function () {
  console.log("Mongo is on rock");
});
module.exports = { iconnect };
