import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Raspored = new Schema(
    {
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
       
        datumvreme: {
            type: Date
        },
       lokacija: {
            type: String
        },delegat: {
            type: String
        },sportisti: {
            type: Array
        },
        id:{type:Number}
    }
);

export default mongoose.model('Raspored', Raspored, 'raspored');