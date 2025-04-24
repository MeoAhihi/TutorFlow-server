"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.belongsTo(models.Tutor);
    }
  }
  Class.init(
    {
      tutorId: DataTypes.INTEGER,
      coverPhotoUrl: DataTypes.STRING,
      name: DataTypes.STRING,
      subject: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
