import express from 'express'
import { saveName , getCustomers , deleteName, saveFood , deleteFood} from '../controller/customerController';


const router = express.Router();
 
// import functions 
router
.post('/save-name' , saveName)
.post('/delete-name' , deleteName)
.post('/save-food' , saveFood)
.get('/get-customers' , getCustomers)
.delete('/delete-food' , deleteFood)


export default router;
