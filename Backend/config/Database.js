import {Sequelize} from "sequelize";
 
const db = new Sequelize('fabric_server','root','',{
    host: 'localhost',
    dialect: 'mysql',

});
 
export default db;