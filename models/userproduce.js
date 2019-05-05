module.exports = function(sequelize, DataTypes) {
    var UserProduces = sequelize.define("UserProduces", {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'user_id'
        }
      },
        prod_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Produces',
              key: 'prod_id'
          }
        },
    });
       
    return UserProduces;
  };