module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    "Photo",
    {
      photo_caption: DataTypes.STRING,
      photo_url: DataTypes.STRING,
      photo_upload_date: DataTypes.DATE,
      listingId: DataTypes.INTEGER
    },
    {}
  );
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.Listing, {
      foreignKey: "listingId",
      as: "photoCreator",
      onDelete: "CASCADE"
    });
  };
  return Photo;
};
