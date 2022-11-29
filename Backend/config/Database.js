import {Sequelize} from "sequelize";
 
const db = new Sequelize('fabricserver','root','',{
    host: 'localhost',
    dialect: 'mysql',

});
 
export default db;