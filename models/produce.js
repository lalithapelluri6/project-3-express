var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Produce = sequelize.define("Produce", {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      isUnique:true
    },
    prod_Name: {
      type: DataTypes.STRING,
      isUnique :true
    },    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });

  

  Produce.associate = (models) => {
    Produce.belongsToMany(models.User, {
        through: models.FarmerProduce
    });

    // Produce.associate = (models) => {
    //   Produce.belongsTo(models.Users, {
    //     foreignKey: "userUUID",
    //     onDelete: 'cascade'
    //   });

    // Users.belongsToMany(models.Produces, {
    //   through: models.storeProduces
    // });
    
   }
  return Produce;
};