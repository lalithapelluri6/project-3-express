module.exports = function(sequelize, DataTypes) {
    var storeProduces = sequelize.define("storeProduces", {
      _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
        }
      },
      prod_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Produces',
          }
        },
    });
    return storeProduces;
  };