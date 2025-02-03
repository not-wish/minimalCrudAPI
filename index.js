const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.routes.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin1234@backenddb.tekfe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  // admin <- user
  // admin 1234 <- passwords
  // Node-API <- collection name
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Sever is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("Hello from notwish!");
});
