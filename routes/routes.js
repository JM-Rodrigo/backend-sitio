import express from 'express'
import { getAllAutos, getAuto, createAuto, updateAuto, deleteAuto} from '../controllers/Controller.js'

const router = express.Router()

router.get('/', getAllAutos)
router.get('/:id',getAuto)
router.post('/', createAuto)
router.put('/:id', updateAuto)
router.delete('/:id', deleteAuto)

export default router

