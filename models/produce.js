// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Produces = sequelize.define("Produces", {
      prod_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    });

    Produces.associate = (models) => {
        Produces.belongsToMany(models.Users, {
          through: models.farmerProduces
        });
      }
    return Produces;
  };