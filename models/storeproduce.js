module.exports = function(sequelize, DataTypes) {
    var storeProduces = sequelize.define("storeProduces", {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'user_id'
        }
      },
        inven_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Produces',
              key: 'prod_id'
          }
        },
    });
    return storeProduces;
  };