require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    host: process.env.DB_HOST,
    username:  process.env.DB_USERNAME,
    password:  process.env.DB_PASS,
    database:  process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    define: {
        timestamps: true,
        underscored: true
    }
};