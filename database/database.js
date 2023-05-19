const  Sequelize  = require("sequelize");
const connection = new Sequelize('guiapress','root','',{
    host: 'localhost',
    dialect:'mysql',
    timezone:"-03:00" // timezone do Brasil
});
module.exports = connection;