import Catemodel from "../models/CateModel.js";
 
export const getCatemodels = async(req, res) =>{
    try {
        const response = await Catemodel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
