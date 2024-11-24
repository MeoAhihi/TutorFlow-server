'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutor.belongsTo(models.User, {foreignKey: 'id'})
      Tutor.hasMany(models.Student)
    }
  }
  Tutor.init({
    education: DataTypes.STRING,
    subjectOfSpecialized: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutor',
    timestamps: false
  });
  return Tutor;
};