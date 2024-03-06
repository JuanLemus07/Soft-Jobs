import express from 'express';
import  { loginUser } from '../../src/api/v1/controllers/loginController.js'
import { validParamLogin } from "../../midlewares/middlewares/validateParametersLogin.js"
const router = express.Router()

router.post("/login", validParamLogin, loginUser)

export default router
