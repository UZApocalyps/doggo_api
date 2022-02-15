require("dotenv").config();
require("./src/models/init-models");
const express = require("express");
const app = express();
const port = 3000;

// Routers
const consultationsRouter = require("./src/routes/consultationsRouter");

app.use(express.json()); // In order to parse requests json body

app.use("/", consultationsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
