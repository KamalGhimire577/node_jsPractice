//const { DataTypes } = require("sequelize"); // Fix this line

const bookModel = (sequelize, DataTypes) => {
  const book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false, 
      defaultValue: "unknown",
    },
  });
  return book;
};

module.exports = bookModel;
