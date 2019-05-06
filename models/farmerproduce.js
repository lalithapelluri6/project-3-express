module.exports = function(sequelize, DataTypes) {
    var farmerProduces = sequelize.define("farmerProduces", {
      UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
            }
          },
          ProduceId: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                  model: 'Produces',
              }
            },
    });
    return farmerProduces;
  };