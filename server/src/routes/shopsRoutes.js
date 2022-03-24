import express from 'express'
const router = express.Router()
import { getAllShops } from '../controllers/shopsControllers.js'

router.route('/').get(getAllShops)

export default router
