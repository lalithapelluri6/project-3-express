module.exports = function(sequelize, DataTypes) {
    var farmerProduces = sequelize.define("farmerProduces", {
      UserId: {
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
       
    return farmerProduces;
  };