import express from 'express';
import { TakmicenjeController } from '../controllers/takmicenje.controller';

const takmicenjeRouter = express.Router();

takmicenjeRouter.route('/dodajTakmicenje').post(
    (req, res)=>new TakmicenjeController().dodajTakmicenja(req, res)
);
takmicenjeRouter.route('/pretragapoparam').post(
    (req, res)=>new TakmicenjeController().pretragapoparam(req, res)
);
takmicenjeRouter.route('/nadjiDelegata').post(
    (req, res)=>new TakmicenjeController().nadjiDelegata(req, res)
);
takmicenjeRouter.route('/dohvatiTakmicenja').get(
    (req, res)=>new TakmicenjeController().dohvatiTakmicenja(req, res)
);
takmicenjeRouter.route('/dohvatiTakmicenje').post(
    (req, res)=>new TakmicenjeController().dohvatiTakmicenje(req, res)
);
takmicenjeRouter.route('/proveriDelegatID').post(
    (req, res)=>new TakmicenjeController().proveriDelegatID(req, res)
);
takmicenjeRouter.route('/proveriInterval').post(
    (req, res)=>new TakmicenjeController().proveriInterval(req, res)
);
takmicenjeRouter.route('/dohvatiGotovaIndividualnaTakmicenja').post(
    (req, res)=>new TakmicenjeController().dohvatiGotovaIndividualnaTakmicenja(req, res)
);

export default takmicenjeRouter;