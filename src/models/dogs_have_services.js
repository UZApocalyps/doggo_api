const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dogs_have_services', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_dog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dogs',
        key: 'id'
      }
    },
    id_service: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dogs_have_services',
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
        name: "fk_dogs_dogs_have_services_idx",
        using: "BTREE",
        fields: [
          { name: "id_dog" },
        ]
      },
      {
        name: "fk_services_dogs_have_services_idx",
        using: "BTREE",
        fields: [
          { name: "id_service" },
        ]
      },
    ]
  });
};
