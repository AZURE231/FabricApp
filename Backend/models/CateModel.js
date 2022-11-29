import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;

const Catemodel = db.define('supplierfull',{
   // id: DataTypes.ENUM('1','2','3','4','5','6'),
    supplier_id: DataTypes.CHAR(10),
    totalpayment: DataTypes.DECIMAL(41,0),
    color: DataTypes.CHAR(6),
    updatedAt: DataTypes.DATE,
    selling_price: DataTypes.BIGINT,
    quantity: DataTypes.MEDIUMINT,
},{
    freezeTableName:true
});
 
export default Catemodel;

 
(async()=>{
    await db.sync();
})();