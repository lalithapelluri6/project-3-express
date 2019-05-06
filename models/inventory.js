// // const sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Inventories = sequelize.define("Inventories", {
      inven_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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

    Inventories.associate = (models) => {
        Inventories.belongsToMany(models.Users, {
          through: "UserInventories",
          foreignKey: "inven_id" 
        });
       }
    return Inventories;
  };