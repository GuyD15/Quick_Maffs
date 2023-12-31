// Loads environment variables from .env file
require('dotenv').config();

// Import Sequelize library
const { Sequelize } = require('sequelize');

let sequelize;

// If deploying on Heroku with the JAWSDB add-on, use JAWSDB_URL
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Otherwise, use local MySQL database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

// Authenticate connection to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch((err) => {
    console.error('Unable to connect.', err);
  });

module.exports = sequelize;

