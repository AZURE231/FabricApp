import {Sequelize} from "sequelize";
 
const db = new Sequelize('fabric_server','Manager','',{
    host: 'localhost',
    dialect: 'mysql',

});
 
export default db;