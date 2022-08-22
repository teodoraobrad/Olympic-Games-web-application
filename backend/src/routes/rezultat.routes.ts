import express from 'express';
import { RezultatController } from '../controllers/rezultat.controller';

const rezultatRouter = express.Router();

rezultatRouter.route('/unesiRezultat').post(
    (req, res)=>new RezultatController().unesiRezultat(req, res)
);
export default rezultatRouter;