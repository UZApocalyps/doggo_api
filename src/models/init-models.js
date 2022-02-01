var DataTypes = require("sequelize").DataTypes;
var _breeds = require("./breeds");
var _categories = require("./categories");
var _clients = require("./clients");
var _clients_take_services = require("./clients_take_services");
var _consultations = require("./consultations");
var _diseases = require("./diseases");
var _dogs = require("./dogs");
var _dogs_have_diseases = require("./dogs_have_diseases");
var _dogs_have_services = require("./dogs_have_services");
var _localities = require("./localities");
var _services = require("./services");

function initModels(sequelize) {
  var breeds = _breeds(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var clients = _clients(sequelize, DataTypes);
  var clients_take_services = _clients_take_services(sequelize, DataTypes);
  var consultations = _consultations(sequelize, DataTypes);
  var diseases = _diseases(sequelize, DataTypes);
  var dogs = _dogs(sequelize, DataTypes);
  var dogs_have_diseases = _dogs_have_diseases(sequelize, DataTypes);
  var dogs_have_services = _dogs_have_services(sequelize, DataTypes);
  var localities = _localities(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);

  dogs.belongsTo(breeds, { as: "breed_breed", foreignKey: "breed"});
  breeds.hasMany(dogs, { as: "dogs", foreignKey: "breed"});
  dogs.belongsTo(breeds, { as: "crossbreed_breed", foreignKey: "crossbreed"});
  breeds.hasMany(dogs, { as: "crossbreed_dogs", foreignKey: "crossbreed"});
  breeds.belongsTo(categories, { as: "id_category_category", foreignKey: "id_category"});
  categories.hasMany(breeds, { as: "breeds", foreignKey: "id_category"});
  clients_take_services.belongsTo(clients, { as: "id_client_client", foreignKey: "id_client"});
  clients.hasMany(clients_take_services, { as: "clients_take_services", foreignKey: "id_client"});
  dogs.belongsTo(clients, { as: "id_client_client", foreignKey: "id_client"});
  clients.hasMany(dogs, { as: "dogs", foreignKey: "id_client"});
  dogs_have_diseases.belongsTo(diseases, { as: "id_disease_disease", foreignKey: "id_disease"});
  diseases.hasMany(dogs_have_diseases, { as: "dogs_have_diseases", foreignKey: "id_disease"});
  dogs_have_diseases.belongsTo(dogs, { as: "id_dog_dog", foreignKey: "id_dog"});
  dogs.hasMany(dogs_have_diseases, { as: "dogs_have_diseases", foreignKey: "id_dog"});
  dogs_have_services.belongsTo(dogs, { as: "id_dog_dog", foreignKey: "id_dog"});
  dogs.hasMany(dogs_have_services, { as: "dogs_have_services", foreignKey: "id_dog"});
  clients.belongsTo(localities, { as: "id_locality_locality", foreignKey: "id_locality"});
  localities.hasMany(clients, { as: "clients", foreignKey: "id_locality"});
  services.belongsTo(localities, { as: "id_locality_locality", foreignKey: "id_locality"});
  localities.hasMany(services, { as: "services", foreignKey: "id_locality"});
  clients_take_services.belongsTo(services, { as: "id_service_service", foreignKey: "id_service"});
  services.hasMany(clients_take_services, { as: "clients_take_services", foreignKey: "id_service"});
  consultations.belongsTo(services, { as: "id_service_service", foreignKey: "id_service"});
  services.hasMany(consultations, { as: "consultations", foreignKey: "id_service"});
  dogs_have_services.belongsTo(services, { as: "id_service_service", foreignKey: "id_service"});
  services.hasMany(dogs_have_services, { as: "dogs_have_services", foreignKey: "id_service"});

  return {
    breeds,
    categories,
    clients,
    clients_take_services,
    consultations,
    diseases,
    dogs,
    dogs_have_diseases,
    dogs_have_services,
    localities,
    services,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
