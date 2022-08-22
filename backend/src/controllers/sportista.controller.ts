import express from 'express';
import Rekord from '../models/rekord';
import Sportista from '../models/spotrista';


export class SportistaController{

    pretraga=(req:express.Request,res:express.Response)=>{

        let imeprezime=req.body.imeprezime;
        let zemlja=req.body.zemlja;
        let sport=req.body.sport;
        let pol=req.body.pol;
        let medalja=req.body.medalja;
        let disciplina=req.body.disciplina;   

       if(medalja==false){

        if(disciplina==""){
            Sportista.find({'imeprezime':{$regex:imeprezime},'zemlja':{$regex:zemlja},'sport':{$regex:sport},'pol':{$regex:pol}},(err,sportisti)=>{

                if(err)console.log(err);
                else{
                    res.json(sportisti);
                }
            });
        }else{
             Sportista.find({'imeprezime':{$regex:imeprezime},'zemlja':{$regex:zemlja},'sport':{$regex:sport},'pol':{$regex:pol}, 'disciplina': {$all: [disciplina]}},(err,sportisti)=>{

            if(err)console.log(err);
            else{
                res.json(sportisti);
            }
        });
        }
        
//
       
       }else{

        if(disciplina==""){
            Sportista.find({'imeprezime':{$regex:imeprezime},'zemlja':{$regex:zemlja},'sport':{$regex:sport},'pol':{$regex:pol},'medalja':{$gt:0}},(err,sportisti)=>{

                if(err)console.log(err);
                else{
                    res.json(sportisti);
                }
            });
        }
        else{
              Sportista.find({'imeprezime':{$regex:imeprezime},'zemlja':{$regex:zemlja},'sport':{$regex:sport},'pol':{$regex:pol}, 'disciplina':{$all: [disciplina]},'medalja':{$gt:0}},(err,sportisti)=>{

            if(err)console.log(err);
            else{
                res.json(sportisti);
            }
        });
        }
      

       }
      
        
    }

    rekordi=(req:express.Request,res:express.Response)=>{

      
        
        
      
        Rekord.find({},(err,rekordi)=>{

            if(err)console.log(err);
            else{
                res.json(rekordi);
            }
        });
    }

    dohvatiSportiste=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Sportista.find({'sport':{$regex:sport}, 'disciplina': {$all: [disciplina]},'pol':pol},(err,sportisti)=>{

            if(err)console.log(err);
            else{
                res.json(sportisti);
            }
        });
    }
    
    dohvatiSportistee=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let zemlja=req.body.zemlja;
        
        
        Sportista.find({'sport':{$regex:sport}, 'disciplina': {$all: [disciplina]},'pol':{$regex:pol},'zemlja':{$regex:zemlja}},(err,sportisti)=>{

            if(err)console.log(err);
            else{
                console.log(sportisti);
                res.json(sportisti);
            }
        });
    }

    dodajSportistu=(req:express.Request,res:express.Response)=>{

        let sportista=new Sportista(req.body);
        
        sportista.save().then(() => {
           
            res.status(200).json({ 'poruka': 'sportista dodat' });
        }).catch((err) => {
            res.status(400).json({ 'poruka': err });
        });
    }

    dohvatiSportistu=(req:express.Request,res:express.Response)=>{
        let sport=req.body.sport;
        let imeprezime=req.body.imeprezime;

        Sportista.findOne({'sport':{$regex:sport}, 'imeprezime':{$regex:imeprezime}},(err,sportist)=>{

            if(err)console.log(err);
            else{
                res.json(sportist);
            }
        });
    }


    apdejtujSportistu= (req: express.Request, res: express.Response) => {
        let imeprezime = req.body.imeprezime;
        let sport = req.body.sport;
        let disciplina = req.body.disciplina;
        let zemlja = req.body.zemlja;
        let pol = req.body.pol;

        
        Sportista.collection.updateOne({ 'imeprezime': imeprezime,'sport':sport, 'pol':pol,'zemlja':zemlja }, { $push: { 'disciplina': disciplina } }, (err, resp) => {
            if (err) console.log(err);
            else {
                res.json({ 'poruka': 'promenjeno' });
            }
        });

        
    }

    prebroj= (req: express.Request, res: express.Response) => {
        
        let zemlja = req.body.zemlja;
       

        
        Sportista.find({ 'zemlja': zemlja}, (err, sportisti) => {
            if (err) console.log(err);
            else {
                res.json(sportisti);
            }
        });

        
    }
    prebrojSport= (req: express.Request, res: express.Response) => {
        
        let zemlja = req.body.zemlja;
        let sport=req.body.sport;
       

        
        Sportista.find({ 'zemlja': zemlja, 'sport':sport}, (err, sportisti) => {
            if (err) console.log(err);
            else {
                res.json(sportisti);
            }
        });

        
    }


}