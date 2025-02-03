const express = require("express"); // import Express
const mongoose = require("mongoose"); // import Mongoose
const productRoute = require("./routes/product.routes.js"); // import the route(s)

const app = express();

const dotenv = require('dotenv');
dotenv.config();

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", productRoute);

// MongoDB connection
mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Sever is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("Hello from notwish!");
});
