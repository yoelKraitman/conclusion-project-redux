import express from 'express'
import { getCustomers ,saveCustomer } from '../controller/customerControllers';
const router = express.Router();
 
// import functions 
router
.get("/get-customers" , getCustomers )
.post("/save-customer" , saveCustomer)


export default router;