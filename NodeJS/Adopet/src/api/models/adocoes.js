'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adocoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adocoes.belongsTo(models.Pets, {
        foreignKey: 'pet_id'
      })
      Adocoes.belongsTo(models.Usuarios, {
        foreignKey: 'user_id'
      })
    }
  }
  Adocoes.init({
    
  }, {
    sequelize,
    modelName: 'Adocoes',
  });
  return Adocoes;
};