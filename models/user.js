module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 10]
      }
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.Produce, {
      through: {model: models.UserProduce}
    });
    User.belongsToMany(models.Inventory, {
      through: { model: models.UserInventory }
    });
   }
  return User;
};