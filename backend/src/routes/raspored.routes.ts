import express from 'express';
import { RasporedController } from '../controllers/raspored.controller';

const rasporedRouter = express.Router();

rasporedRouter.route('/dodajRaspored').post(
    (req, res)=>new RasporedController().dodajRaspored(req, res)
);
rasporedRouter.route('/pretragapoparam').post(
    (req, res)=>new RasporedController().pretragapoparam(req, res)
);
rasporedRouter.route('/nadjiDelegata').post(
    (req, res)=>new RasporedController().nadjiDelegata(req, res)
);
rasporedRouter.route('/dohvatiRaspored').get(
    (req, res)=>new RasporedController().dohvatiRaspored(req, res)
);
rasporedRouter.route('/dohvatiRasporedIndividId').post(
    (req, res)=>new RasporedController().dohvatiRasporedIndividId(req, res)
);
rasporedRouter.route('/proveraTermina').post(
    (req, res)=>new RasporedController().proveraTermina(req, res)
);
rasporedRouter.route('/dohvatiGotoveTermine').post(
    (req, res)=>new RasporedController().dohvatiGotoveTermine(req, res)
);
export default rasporedRouter;