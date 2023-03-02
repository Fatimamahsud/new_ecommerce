import express from 'express';
import{
    signIn,signUp
} from "../Controllers/user.js";
import { auth } from '../Middleware/auth.js';

const router = express.Router();
router.post("/signin",signIn);
router.post("/signUp",signUp);
export default router;