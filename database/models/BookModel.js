const { DataTypes } = require("sequelize"); // Fix this line

const bookModel = (sequelize, DataTypes) => {
  const book = sequelize.define("book", {
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookprice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_author: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "unknown",
    },
  });
  return book;
};

module.exports = bookModel;
