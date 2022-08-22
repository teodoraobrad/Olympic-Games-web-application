import express from 'express';
import Raspored from '../models/raspored';


export class RasporedController{

    dodajRaspored=(req:express.Request,res:express.Response)=>{

        let raspored=new Raspored(req.body);
       
        
        raspored.save().then(() => {
           
            res.status(200).json({ 'poruka': 'raspored dodat' });
        }).catch((err) => {
            res.status(400).json({ 'poruka': err });
        });
      
    }
    
    dohvatiRaspored=(req:express.Request,res:express.Response)=>{
  Raspored.find({},(err,raspored)=>{

            if(err)console.log(err);
            else{
                res.json(raspored);
            }
        });
        
    }
    dohvatiRasporedIndividId=(req:express.Request,res:express.Response)=>{

        let id=req.body.id;

        Raspored.findOne({'id':id},(err,raspored)=>{
      
                  if(err)console.log(err);
                  else{
                      res.json(raspored);
                  }
              });
              
          }

    
    pretragapoparam=(req:express.Request,res:express.Response)=>{

        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let vrsta=req.body.vrsta;
        let pol=req.body.pol;

        Raspored.find({'sport':{$regex:sport},'disciplina':{$regex:disciplina},'vrsta':{$regex:vrsta},'pol':{$regex:pol}},(err,raspored)=>{

            if(err)console.log(err);
            else{
                res.json(raspored);
            }
        });
    }

    nadjiDelegata=(req:express.Request,res:express.Response)=>{

        let korisnickoime=req.body.korisnickoime;
       

        Raspored.find({'delegat': korisnickoime},(err,raspored)=>{

            if(err)console.log(err);
            else{
                res.json(raspored);
            }
        });
    }

    proveraTermina=(req:express.Request,res:express.Response)=>{

        
        let lokacija=req.body.lokacija;
        let datumvreme=req.body.datum;


        ////provera poklapanja
        Raspored.findOne({'lokacija':lokacija,'datumvreme':datumvreme},(err,raspored)=>{

            if(err)console.log(err);
            else{
                res.json(raspored);
            }
        });
    }

    dohvatiGotoveTermine=(req:express.Request,res:express.Response)=>{

        let datum=req.body.datum;
       
       

        Raspored.find({'datumvreme': {$lt: datum}},(err,takmicenja)=>{

            if(err)console.log(err);
            else{
                res.json(takmicenja);
            }
        });
    }


}