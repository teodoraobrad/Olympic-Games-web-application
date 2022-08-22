import express from 'express';
import { ZemljaController } from '../controllers/zemlja.controller';


const zemljaRouter = express.Router();

zemljaRouter.route('/ucesnice').get(
    (req, res)=>new ZemljaController().ucesnice(req, res)
);
zemljaRouter.route('/lokacije').get(
    (req, res)=>new ZemljaController().lokacije(req, res)
);

export default zemljaRouter;