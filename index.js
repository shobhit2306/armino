const express = require("express");
const app = express();
const database = require("./src/database/database.js");
const bodyparser = require("body-parser");
require("dotenv").config();
let port = 3000;

// for database connection
database.iconnect();

// parse application/json
app.use(bodyparser.json({ limit: "10mb" }));
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false, limit: "10mb" }));

app.use("/static", express.static(`${__dirname}/static`))


// creating route for customer 
const weatherRouter = require("./src/routers/weather.router.js");
app.use("/weather", weatherRouter);
// starting server 

app.listen(port, () => {
  console.log(`server started at port`, port); 
});