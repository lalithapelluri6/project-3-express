// const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Produce = sequelize.define("Produce", {
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

    Produce.associate = (models) => {
        Produce.belongsToMany(models.User, {
          through: 'UserProduce'
        });
      }
    return Produce;
  };