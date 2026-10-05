import Message from "../model/message.model.js";
import crypto from 'crypto'
import { createMessage } from "../utils/producer.redis.js";
import axios from "axios";
import { consumeMessage } from "../utils/consumer.redis.js";

export async function health(req,res) {
    return res.status(200).json({
        message: "Server is working"
    })
}



export async function sendMessageMain(req,res) {
    try {
        await consumeMessage();
        return res.status(200).json({
            message: 'Processing started'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}