const Db = require("../Db");
const { DataTypes } = require("sequelize");
const sequelize = Db.getDatabase();

const ClientTakeServices = sequelize.define(
  "ClientTakeServices",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id",
      },
    },
    id_service: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "services",
        key: "id",
      },
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "clients_take_services",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_clients_clients_take_services_idx",
        using: "BTREE",
        fields: [{ name: "id_client" }],
      },
      {
        name: "fk_services_clients_take_services_idx",
        using: "BTREE",
        fields: [{ name: "id_service" }],
      },
    ],
  }
);

module.exports = ClientTakeServices;
