import express from "express";
import {
    getSuppliers, 
    createSupplier,
} from "../controllers/SupplierController.js";
import {
    getCatemodels, 
} from "../controllers/CateController.js";

const router = express.Router();
 
router.get('/Supplier', getSuppliers);
router.get('/Catemodel', getCatemodels);
router.post('/Supplier', createSupplier);
 
export default router;
