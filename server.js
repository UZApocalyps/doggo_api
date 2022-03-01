require("dotenv").config();
require("./src/models/init-models");
const express = require("express");
const app = express();
const port = 3000;

// Routers
const consultationsRouter = require("./src/routes/consultationsRouter");
const clientRouter = require("./src/routes/clientRouter");
const diseasesRouter = require("./src/routes/diseasesRouter");

app.use(express.json()); // In order to parse requests json body

app.use("/consultations", consultationsRouter);
app.use("/client", clientRouter);
app.use("/diseases", diseasesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
