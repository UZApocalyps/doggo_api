const Db = require('../Db')
const { DataTypes } = require('sequelize');
const sequelize = Db.getDatabase() ;
const Client = sequelize.define('clients', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    female: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_locality: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'localities',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'clients',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_clients_localities_idx",
        using: "BTREE",
        fields: [
          { name: "id_locality" },
        ]
      },
    ]
  });
  module.exports = Client;