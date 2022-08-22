import express from 'express';
import Takmicenje from '../models/takmicenje';

export class TakmicenjeController{

    dodajTakmicenja=(req:express.Request,res:express.Response)=>{

        let takmicenje=new Takmicenje(req.body);
       
        
        takmicenje.save().then(() => {
           
            res.status(200).json({ 'poruka': 'takmicenje dodato' });
        }).catch((err) => {
            res.status(400).json({ 'poruka': err });
        });
      
    }
    
    dohvatiTakmicenja=(req:express.Request,res:express.Response)=>{
  Takmicenje.find({},(err,takm)=>{

            if(err)console.log(err);
            else{
                res.json(takm);
            }
        });
        
    }
    dohvatiTakmicenje=(req:express.Request,res:express.Response)=>{

        let id=req.body.id;

        Takmicenje.findOne({'id':id},(err,takm)=>{
      
                  if(err)console.log(err);
                  else{
                      res.json(takm);
                  }
              });
              
          }

    
    pretragapoparam=(req:express.Request,res:express.Response)=>{

        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let vrsta=req.body.vrsta;
        let pol=req.body.pol;

        Takmicenje.findOne({'sport':{$regex:sport},'disciplina':{$regex:disciplina},'vrsta':{$regex:vrsta},'pol':{$regex:pol}},(err,sportovi)=>{

            if(err)console.log(err);
            else{
                res.json(sportovi);
            }
        });
    }

    nadjiDelegata=(req:express.Request,res:express.Response)=>{

        let korisnickoime=req.body.korisnickoime;
       

        Takmicenje.find({'delegat': {$all: [korisnickoime]}},(err,takmicenja)=>{

            if(err)console.log(err);
            else{
                res.json(takmicenja);
            }
        });
    }

    proveriDelegatID=(req:express.Request,res:express.Response)=>{

        let korisnickoime=req.body.korisnickoime;
        let id=req.body.id;
       

        Takmicenje.findOne({'id':id,'delegat': {$all: [korisnickoime]}},(err,takmicenje)=>{

            if(err)console.log(err);
            else{
                res.json(takmicenje);
            }
        });
    }
    proveriInterval=(req:express.Request,res:express.Response)=>{

        let datum=req.body.datum;
        let id=req.body.id;
       

        Takmicenje.findOne({'id':id,'datumpocetka': {$lte: datum},'datumkraja': {$gte: datum}},(err,takmicenje)=>{

            if(err)console.log(err);
            else{
                res.json(takmicenje);
            }
        });
    }

    dohvatiGotovaIndividualnaTakmicenja=(req:express.Request,res:express.Response)=>{

        let datum=req.body.datum;
       
       

        Takmicenje.find({'datumkraja': {$lt: datum}},(err,takmicenja)=>{

            if(err)console.log(err);
            else{
                res.json(takmicenja);
            }
        });
    }




}