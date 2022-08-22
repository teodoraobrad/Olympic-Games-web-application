import express from 'express';
import PodrzaniSportDisciplina from '../models/podrzanisportovidiscipline';

import SportDisciplina from '../models/sportdisciplina';
import SportDisciplinaT from '../models/sportdisciplinat';

export class SportDisciplinaController{

    dohvatiSportove=(req:express.Request,res:express.Response)=>{

        SportDisciplinaT.find({'tip':'s'},(err,sportovi)=>{

            if(err)console.log(err);
            else{
                res.json(sportovi);
            }
        });
    }

    dohvatiDiscipline=(req:express.Request,res:express.Response)=>{

        SportDisciplinaT.find({'tip':'d'},(err,discipline)=>{

            if(err)console.log(err);
            else{
                res.json(discipline);
            }
        });

       
    }

   dohvatiSportoveDiscipline=(req:express.Request,res:express.Response)=>{

        SportDisciplina.find({},(err,sportovidiscipline)=>{

            if(err)console.log(err);
            else{
                res.json(sportovidiscipline);
            }
        });
    } 

  /*   dohvatiPodrzaneSportoveDiscipline=(req:express.Request,res:express.Response)=>{

        PodrzaniSportDisciplina.find({},(err,sportovidiscipline)=>{

            if(err)console.log(err);
            else{
                res.json(sportovidiscipline);
            }
        });
    }
  */

 
    dodaj=(req:express.Request,res:express.Response)=>{
let novisportdisciplina=new SportDisciplina(req.body);

novisportdisciplina.save().then(() => {
    res.status(200).json({ 'poruka': 'sport dodat' });
}).catch((err) => {
    res.status(400).json({ 'poruka': err });
});

    } 

    pretragapoparam=(req:express.Request,res:express.Response)=>{

        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let vrsta=req.body.vrsta;
        
        SportDisciplina.findOne({'sport':{$regex:sport},'disciplina':{$regex:disciplina},'vrsta':{$regex:vrsta}},(err,sportovi)=>{

            if(err)console.log(err);
            else{
                res.json(sportovi);
            }
        });
    }

}