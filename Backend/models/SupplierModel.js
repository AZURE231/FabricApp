import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Supplier = db.define('supplier',{
    name: DataTypes.TEXT('tiny'),
    address: DataTypes.TEXT('tiny'),
    bank_account: DataTypes.STRING,
    tax_code: DataTypes.CHAR(16)
},{
    freezeTableName:true
});
 
export default Supplier;



 
(async()=>{
    await db.sync();
})();