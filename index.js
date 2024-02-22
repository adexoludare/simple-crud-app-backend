const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

require("./models/db.js")();

//meddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

const port = process.env.PORT || 3000; // use assgin port if not assgin use 3000
app.listen(port, () => {
  console.log(`server runnig on port ${port}`);
});
