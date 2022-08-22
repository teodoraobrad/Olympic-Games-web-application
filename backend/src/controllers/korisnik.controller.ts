import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController {
    prijava = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;
        let lozinka = req.body.lozinka;

        Korisnik.findOne({ 'korisnickoime': korisnickoime, 'lozinka': lozinka },
            (err, korisnik) => {
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }

    korisnickoime = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;


        Korisnik.findOne({ 'korisnickoime': korisnickoime },
            (err, korisnik) => {
                if (err) console.log(err);
                else {
                    res.json(korisnik);
                }
            })
    }


    promenaLozinke = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;
        let staralozinka = req.body.staralozinka;
        let novalozinka = req.body.novalozinka;

        
        Korisnik.collection.updateOne({ 'korisnickoime': korisnickoime }, { $set: { 'lozinka': novalozinka } }, (err, resp) => {
            if (err) console.log(err);
            else {
                res.json({ 'poruka': 'promenjeno' });
            }
        });

        
    }

    registracija = (req: express.Request, res: express.Response) => {
        let user = new Korisnik(req.body);


        user.save().then(() => {
            res.status(200).json({ 'message': 'user added' });
        }).catch((err) => {
            res.status(400).json({ 'message': err });
        });

    }

    dohvatiDelegate=(req: express.Request, res: express.Response) => {
        

        Korisnik.find({ 'tip': 'delegat','zahtev':true},
            (err, korisnici) => {
                if (err) console.log(err);
                else res.json(korisnici);
            })
    } 

    dohvatiZahteve = (req: express.Request, res: express.Response) => {
        


        Korisnik.find({ 'zahtev': false },
            (err, korisnici) => {
                if (err) console.log(err);
                else {
                    res.json(korisnici);
                }
            })
    }
   
    traziVodju= (req: express.Request, res: express.Response) => {
       
        let nacionalnost=req.body.nacionalnost;

        Korisnik.findOne({'nacionalnost':nacionalnost,'tip':'vodja','zahtev':true},
        (err, korisnik) => {
            if (err) console.log(err);
            else {
                console.log(korisnik);
                res.json(korisnik);
            }
        })
        
    }


    zahtevTrue = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;
       

        
        Korisnik.collection.updateOne({ 'korisnickoime': korisnickoime }, { $set: { 'zahtev': true } }, (err, resp) => {
            if (err) console.log(err);
            else {
                res.json({ 'poruka': 'promenjeno' });
            }
        });

        
    }

}