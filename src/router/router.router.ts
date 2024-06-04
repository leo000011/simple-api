import { Router, Request, Response } from "express";

import * as Controller from '../controllers/controller.controller'

const router = Router();


router.get('/ping', Controller.begin)

router.get('/frases', Controller.getAll)
router.get('/frase/:id', Controller.getOne)
router.put('/frase/:id', Controller.updatePhrase)

router.post('/frases', Controller.createApi)
router.delete('/frase/:id', Controller.deletePhrase)

export default router