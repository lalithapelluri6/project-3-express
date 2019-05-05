// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Produces = sequelize.define("Produces", {
      prod_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      prod_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      price: {
          type: DataTypes.FLOAT,
          allowNull: false,
      },
    });

    Produces.associate = (models) => {
        Produces.belongsToMany(models.Users, {
          through: "userProduce",
          foreignKey: "prod_id"
        });
      }
    return Produces;
  };