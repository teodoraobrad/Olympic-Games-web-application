import express from 'express';
import { SportistaController } from '../controllers/sportista.controller';



const sportistaRouter = express.Router();

sportistaRouter.route('/pretraga').post(
    (req, res)=>new SportistaController().pretraga(req, res)
);

sportistaRouter.route('/rekordi').get(
    (req, res)=>new SportistaController().rekordi(req, res)
);

sportistaRouter.route('/dohvatiSportiste').post(
    (req, res)=>new SportistaController().dohvatiSportiste(req, res)
);

sportistaRouter.route('/dodajSportistu').post(
    (req, res)=>new SportistaController().dodajSportistu(req, res)
);
sportistaRouter.route('/dohvatiSportistu').post(
    (req, res)=>new SportistaController().dohvatiSportistu(req, res)
);
sportistaRouter.route('/apdejtujSportistu').post(
    (req, res)=>new SportistaController().apdejtujSportistu(req, res)
);
sportistaRouter.route('/dohvatiSportistee').post(
    (req, res)=>new SportistaController().dohvatiSportistee(req, res)
);
sportistaRouter.route('/prebroj').post(
    (req, res)=>new SportistaController().prebroj(req, res)
);
sportistaRouter.route('/prebrojSport').post(
    (req, res)=>new SportistaController().prebrojSport(req, res)
);
export default sportistaRouter;