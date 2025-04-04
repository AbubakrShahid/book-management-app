const sequelize = require("../config/database.js");
const User = require("./user.js");
const Book = require("./book.js");

User.hasMany(Book, { foreignKey: "userId" });
Book.belongsTo(User, { foreignKey: "userId" });

const db = { sequelize, User, Book };

module.exports = db;
