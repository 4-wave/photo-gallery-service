module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define(
    'Host',
    {
      host_name: DataTypes.STRING,
      listingId: DataTypes.INTEGER
    },
    {}
  );
  Host.associate = function(models) {
    // associations can be defined here
    Host.belongsTo(models.Listing, {
      foreignKey: 'listingId',
      as: 'host',
      onDelete: 'CASCADE'
    });
  };
  return Host;
};
