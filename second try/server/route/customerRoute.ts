import express from 'express'
import { saveName , getCustomers , deleteName} from '../controller/customerController';


const router = express.Router();
 
// import functions 
router
.post('/save-name' , saveName)
.post('/delete-name' , deleteName)
.get('/get-customers' , getCustomers)


export default router;
