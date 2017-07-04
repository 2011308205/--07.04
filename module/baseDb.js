var sequelize = require('sequelize');
var connection = new sequelize('bolg','root','root',{
    host:'127.0.0.1',
    dialect:'mysql'
});
module.exports=connection;