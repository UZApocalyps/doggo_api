const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dogs_have_diseases', {
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
    id_disease: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'diseases',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dogs_have_diseases',
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
        name: "fk_diseases_dogs_have_diseases_idx",
        using: "BTREE",
        fields: [
          { name: "id_disease" },
        ]
      },
    ]
  });
};
