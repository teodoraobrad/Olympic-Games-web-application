import express from 'express';
import Lokacija from '../models/lokacija';
import Zemlja from '../models/zemlja';

export class ZemljaController{

    ucesnice=(req:express.Request,res:express.Response)=>{

        Zemlja.find({},(err,zemlje)=>{

            if(err)console.log(err);
            else{
                res.json(zemlje);
            }
        });
    }
    
    lokacije=(req:express.Request,res:express.Response)=>{

        Lokacija.find({},(err,lokacije)=>{

            if(err)console.log(err);
            else{
                res.json(lokacije);
            }
        });
    }


}