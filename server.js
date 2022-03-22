require("dotenv").config();
require("./src/models/init-models");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const express = require("express");
const app = express();
const port = 3000;

// Routers
const consultationsRouter = require("./src/routes/consultationsRouter");
const clientRouter = require("./src/routes/clientRouter");
const diseasesRouter = require("./src/routes/diseasesRouter");
const dogRouter = require("./src/routes/dogRouter");
const categoriesRouter = require("./src/routes/categoriesRouter");
const breedRouter = require("./src/routes/breedRouter");
const servicesRouter = require("./src/routes/servicesRouter");


var auth = function (req, res, next) {
  if(process.env.SECRET_TOKEN == req.headers["token"])
  {
    next();
  }
  else{
    res.sendStatus(403);
    next();
  }
};

app.use(auth);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json()); // In order to parse requests json body

app.use("/", consultationsRouter);
app.use("/", diseasesRouter);
app.use("/", clientRouter);
app.use("/", dogRouter);
app.use("/", categoriesRouter);
app.use("/", breedRouter);
app.use("/", servicesRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
