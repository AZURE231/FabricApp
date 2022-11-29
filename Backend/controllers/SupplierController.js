import Supplier from "../models/SupplierModel.js";
 
export const getSuppliers = async(req, res) =>{
    try {
        const response = await Supplier.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createSupplier = async(req, res) =>{
    try {
        await Supplier.create(req.body);
        res.status(201).json({msg: "Supplier Created"});
    } catch (error) {
        console.log(error.message);
    }
}