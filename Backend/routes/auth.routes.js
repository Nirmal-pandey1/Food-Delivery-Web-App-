import express from 'express';
import{signIn, signUp, signOut,emailExist,sendMail} from '../controllers/auth.controllers.js';
const router = express.Router();
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/signout', signOut);
router.post('/email-exist', emailExist);
router.post('/send-mail', sendMail);
export default router;