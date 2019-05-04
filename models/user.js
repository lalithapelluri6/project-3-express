var Sequelize = require("sequelize");

var uuidv1  = require('uuid/v1');

var bcrypt  = require('bcrypt');  

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
        min: 5
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
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,     
    },
    email: {
      type: DataTypes.STRING,
    }
  });

  // methods ======================
    // generating pw hash
    User.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    // validate pw
    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };



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