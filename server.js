require("dotenv").config();
require("./src/models/init-models");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const express = require("express");
const app = express();
const port = 3000;

// Routers
const consultationsRouter = require("./src/routes/consultationsRouter");
const clientRouter = require("./src/routes/clientRouter");
const diseasesRouter = require("./src/routes/diseasesRouter");
const dogRouter = require("./src/routes/dogRouter");
const breedRouter = require("./src/routes/breedRouter");

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json()); // In order to parse requests json body

app.use("/", consultationsRouter);
app.use("/", diseasesRouter);
app.use("/", clientRouter);
app.use("/", dogRouter);
app.use("/", breedRouter);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
