'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.belongsTo(models.Usuarios, {
        foreignKey: 'user_id'
      })
    }
  }
  Pets.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    bearing: DataTypes.STRING,
    temperament: DataTypes.STRING,
    photo: DataTypes.STRING,
    adopted_pet: DataTypes.BOOLEAN,
    UF: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};