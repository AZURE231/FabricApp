import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;

const Catemodel = db.define('paymentsup',{
    category_id: DataTypes.ENUM('1','2','3','4','5','6'),
    supplier_id: DataTypes.CHAR(10),
    totalpayment: DataTypes.DECIMAL(41,0),
},{
    freezeTableName:true
});
 
export default Catemodel;

 
(async()=>{
    await db.sync();
})();