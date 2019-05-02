// const sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
      prod_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock_remain: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      threshold: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
    });

    Inventory.associate = (models) => {
        Inventory.belongsToMany(models.User, {
          through: {model: models.UserInventory}
        });
       }
    return Inventory;
  };