import express from 'express'
import { createNewUser, getUserByEmail }   from '../../src/api/v1/controllers/userController.js'
import { validParamUser } from "../../midlewares/middlewares/validateParametersUser.js"
import { isLogin } from "../../midlewares/middlewares/isLogin.js"

const router = express.Router()

router.post("/usuarios",validParamUser, createNewUser)
router.get("/usuarios", isLogin, getUserByEmail)

export default router
