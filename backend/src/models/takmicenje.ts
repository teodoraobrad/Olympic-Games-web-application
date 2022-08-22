import mongoose from 'mongoose';
import lokacija from './lokacija';

const Schema = mongoose.Schema;

let Takmicenje = new Schema(
    {
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        format: {
            type: String
        }, 
        pol: {
            type: String
        },
        vrsta: {
            type: String
        },
       
        datumpocetka: {
            type: Date
        },
        datumkraja: {
            type: Date
        },lokacija: {
            type: String
        },delegat: {
            type: Array
        },sportisti: {
            type: Array
        },
        id:{type:Number},
        zavrseno:{
            type:Boolean
        }
    }
);

export default mongoose.model('Takmicenje', Takmicenje, 'takmicenja');