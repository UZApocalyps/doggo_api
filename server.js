require("dotenv").config();
require("./src/models/init-models");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const express = require("express");
const app = express();
const port = 80;

// Routers
const consultationsRouter = require("./src/routes/consultationsRouter");
const clientRouter = require("./src/routes/clientRouter");
const diseasesRouter = require("./src/routes/diseasesRouter");
const dogRouter = require("./src/routes/dogRouter");
const categoriesRouter = require("./src/routes/categoriesRouter");
const breedRouter = require("./src/routes/breedRouter");
const servicesRouter = require("./src/routes/servicesRouter");

var auth = function (req, res, next) {
  if (process.env.SECRET_TOKEN == req.headers["token"]) {
    next();
  } else {
    res.sendStatus(403);
    next();
  }
};

app.use(auth);
app.use(express.json()); // In order to parse requests json body

app.get("/", (req, res) => {
  res.status(200).json("Doggo API");
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/consultations", consultationsRouter);
app.use("/diseases", diseasesRouter);
app.use("/clients", clientRouter);
app.use("/dogs", dogRouter);
app.use("/categories", categoriesRouter);
app.use("/breeds", breedRouter);
app.use("/services", servicesRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
