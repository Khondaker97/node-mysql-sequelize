const dbconfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("connected..!"))
  .catch((err) => console.log("ERROR", err));

//initialize a db obj
const db = {};

//create sequelize instance
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//create models/tables
db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);
//force: true -> create something which isn't existing, each update also create a new
db.sequelize
  .sync({ force: false })
  .then(() => console.log("yes re-sync done!"));

module.exports = db;
