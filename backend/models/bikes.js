"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users,{foreignKey:"userId"})
      this.hasMany(models.rentals,{foreignKey:"bikeId",as:"rentedBikes"})
    }
  }
  bikes.init(
    {
      bikeName: DataTypes.STRING,
      bikeNo: DataTypes.STRING,
      image: DataTypes.STRING,
      pricePerDay: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bikes",
    }
  );
  return bikes;
};
