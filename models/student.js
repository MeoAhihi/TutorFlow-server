"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.User, { foreignKey: "id" });
      Student.belongsTo(models.Tutor);
    }
  }
  Student.init(
    {
      gradeLevel: DataTypes.STRING,
      strength: DataTypes.STRING,
      challenges: DataTypes.STRING,
      learningGoal: DataTypes.STRING,
      preferedLearningMethod: DataTypes.STRING,
      engagementStyle: DataTypes.STRING,
      studyHabit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
      timestamps: false,
    }
  );
  return Student;
};
