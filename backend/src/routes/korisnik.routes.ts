import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';


const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res)=>new KorisnikController().prijava(req, res)
);

korisnikRouter.route('/promenaLozinke').post(
    (req, res)=>new KorisnikController().promenaLozinke(req, res)
);
korisnikRouter.route('/registracija').post(
    (req, res)=>new KorisnikController().registracija(req, res)
);
korisnikRouter.route('/korisnickoime').post(
    (req, res)=>new KorisnikController().korisnickoime(req, res)
);
 korisnikRouter.route('/dohvatiDelegate').get(
    (req, res)=>new KorisnikController().dohvatiDelegate(req, res)
);
korisnikRouter.route('/dohvatiZahteve').get(
    (req, res)=>new KorisnikController().dohvatiZahteve(req, res)
);
korisnikRouter.route('/traziVodju').post(
    (req, res)=>new KorisnikController().traziVodju(req, res)
);
korisnikRouter.route('/zahtevTrue').post(
    (req, res)=>new KorisnikController().zahtevTrue(req, res)
);
export default korisnikRouter;