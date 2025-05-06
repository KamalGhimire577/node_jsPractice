//Database connection code goes here

const { Sequelize, DataTypes } = require("sequelize");
//const bookModel = require("c:/Users/Acer/Desktop/node_final/database/models/BookModel");

const sequelize = new Sequelize(
  "postgres://postgres.halgmviyjtjtjemvufpf:kexatwketaketiho@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
 
  {
    dialect: "postgres",
    protocol: "postgres",
    logging: false, // optional: disables SQL logging
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication successful , cunnect vayo hai tw");
  })
  .catch((e) => {
    console.log("Error", e);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db
//db.books = bookModel(sequelize, DataTypes);
//db.user = User(sequelize, DataTypes);
//db.product = productModel(sequelize, DataTypes);

//Migration of database goes here
//sequelize.sync({ alter: false }).then(() => {
  //console.log("Migratin succssfylly!");
//});

module.exports = db;
