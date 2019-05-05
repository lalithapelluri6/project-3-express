module.exports = function(sequelize, DataTypes) {
    var UserInventories = sequelize.define("UserInventories", {
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
              model: 'Inventories',
              key: 'inven_id'
          }
        },
    });
    return UserInventories;
  };