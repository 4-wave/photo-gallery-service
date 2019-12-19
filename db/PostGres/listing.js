/* eslint-disable quotes */
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    "Listing",
    {
      listing_name: DataTypes.STRING,
      region: DataTypes.STRING
    },
    {}
  );

  Listing.associate = function(models) {
    // associations can be defined here
    Listing.hasMany(models.photo, {
      foreignKey: "listingId",
      as: "listing",
      onDelete: "CASCADE"
    });
  };

  return Listing;
};
