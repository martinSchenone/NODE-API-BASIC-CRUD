require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const USER = process.env.USER_MONGODB;
const KEY = process.env.SECRET_KEY_MONGODB;
// all the routes
const productRoute = require("./routes/product.route");
// middleware
// middleware for json
app.use(express.json());
// middleware for FORM urlencoded
app.use(express.urlencoded({ extended: false }));

//default route in the products router app
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from NODE-API");
});

// connection to mongoDB
mongoose
  .connect(
    `mongodb+srv://${USER}:${KEY}@backenddb.4k04hem.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
