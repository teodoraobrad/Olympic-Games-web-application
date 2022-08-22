import express from 'express';
import Rezultat from '../models/rezultat';



export class RezultatController{

    unesiRezultat=(req:express.Request,res:express.Response)=>{

        let rez=new Rezultat(req.body);
       
        
        rez.save().then(() => {
           
            res.status(200).json({ 'poruka': 'uneto' });
        }).catch((err) => {
            res.status(400).json({ 'poruka': err });
        });
      
    }


}