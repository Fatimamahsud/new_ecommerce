import express from 'express';
import { addItems, viewProduct,deleteProduct,updateProduct, viewProductById } from '../Controllers/product.js';
import { auth } from '../Middleware/auth.js';

const router = express.Router();
router.post("/addItems",addItems);
router.get('/viewProduct',viewProduct)
router.post('/deleteProduct',deleteProduct)
router.patch('/updateProduct',updateProduct)
router.get('/viewProductById/:id',viewProductById)


export default router;