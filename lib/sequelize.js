const { Sequelize } = require("sequelize");

// Load environment variables if not already loaded
require("dotenv").config();

// Set up the configuration based on the environment
const config = require("../config/config.js")[process.env.NODE_ENV || "development"];

// Initialize Sequelize with the configuration
const sequelize = new Sequelize(
  config.database, // Database name
  config.username, // Username
  config.password, // Password
  {
    host: config.host,     // Database host
    dialect: "postgres",   // Database dialect
    port: config.port,     // Database port
    logging: config.logging || false, // Optional logging configuration
  }
);

module.exports = sequelize;
