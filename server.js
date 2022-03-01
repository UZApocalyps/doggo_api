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

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json()); // In order to parse requests json body

app.use("/consultations", consultationsRouter);
app.use("/client", clientRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
