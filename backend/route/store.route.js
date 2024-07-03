import express from 'express';
import { getStore } from '../controller/Store.controller.js';

const router = express.Router()

router.get("/", getStore);

export default router;
