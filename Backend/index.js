import express from "express";
import cors from "cors";
import SupplierRoute from "./routes/SupplierRoute.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(SupplierRoute);
 
app.listen(5000, ()=> console.log('Server up and running...')); 