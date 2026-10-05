import { Router } from "express";
import * as mesCont from '../controllers/message.controller.js'
const messageRouter=Router();

messageRouter.get('/', mesCont.health)

messageRouter.post('/sendMessageMain', mesCont.sendMessageMain)
export default messageRouter
