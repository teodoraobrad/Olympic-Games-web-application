import express from 'express';
import { EkipaController } from '../controllers/ekipa.controller';


const ekipaRouter = express.Router();
/* 
sportistaRouter.route('/pretraga').post(
    (req, res)=>new SportistaController().pretraga(req, res)
);

sportistaRouter.route('/rekordi').get(
    (req, res)=>new SportistaController().rekordi(req, res)
);

sportistaRouter.route('/dohvatiSportiste').post(
    (req, res)=>new SportistaController().dohvatiSportiste(req, res)
);
 */
ekipaRouter.route('/dohvatiEkipe').post(
    (req, res)=>new EkipaController().dohvatiEkipe(req, res)
);
ekipaRouter.route('/dodajEkipu').post(
    (req, res)=>new EkipaController().dodajEkipu(req, res)
);

export default ekipaRouter;