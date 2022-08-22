import express from 'express';
import { SportDisciplinaController } from '../controllers/sportdisciplina.controller';

const sportovidisciplineRouter = express.Router();

sportovidisciplineRouter.route('/dohvatiSportove').get(
    (req, res)=>new SportDisciplinaController().dohvatiSportove(req, res)
);
sportovidisciplineRouter.route('/dohvatiDiscipline').get(
    (req, res)=>new SportDisciplinaController().dohvatiDiscipline(req, res)
);
 sportovidisciplineRouter.route('/dodaj').post(
    (req, res)=>new SportDisciplinaController().dodaj(req, res)
);
 sportovidisciplineRouter.route('/dohvatiSportoveDiscipline').get(
    (req, res)=>new SportDisciplinaController().dohvatiSportoveDiscipline(req, res)
);
sportovidisciplineRouter.route('/pretragapoparam').post(
    (req, res)=>new SportDisciplinaController().pretragapoparam(req, res)
); /*
sportovidisciplineRouter.route('/dohvatiPodrzaneSportoveDiscipline').get(
    (req, res)=>new SportDisciplinaController().dohvatiPodrzaneSportoveDiscipline(req, res)
); */
export default sportovidisciplineRouter;