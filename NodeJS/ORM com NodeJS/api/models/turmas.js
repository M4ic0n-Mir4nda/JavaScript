'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.Matriculas, { // Faz a associassão de Turmas para as outras tabelas como FK
        foreignKey: 'turma_id'
      })
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: 'docente_id'
      }); // Assim como associa Turma a matricula, o metodo do Sequelize exige que você faça o inverso tambem assim o modelo "pertencendo" as chaves primarias que foram associadas
      Turmas.belongsTo(models.Niveis, {
        foreignKey: 'nivel_id'
      });
    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};