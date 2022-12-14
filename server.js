const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mysql = require("mysql2");
const productRoutes = require("./routes/productRoutes");
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing
app.get("/", (req, res) => {
  res.send("TESTING SUCCESSFUL!");
});
//routes
app.use("/api/products", productRoutes);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log(`server is running! ${PORT}`));
