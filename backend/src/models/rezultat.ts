
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Rezultat = new Schema(
    {
        sportista:{
            type: String
        },
        sport: {
            type: String
        },
        disciplina: {
            type: String
        }, 
        pol: {
            type: String
        },
        vrsta: {
            type: String
        },
       delegat: {
            type: String
        },format: {
            type: String
        },
        id:{type:Number},
        rezultat:{
            type:String
        },
        medalja:{
            type:Number
        }
    }
);

export default mongoose.model('Rezultat', Rezultat, 'rezultati');