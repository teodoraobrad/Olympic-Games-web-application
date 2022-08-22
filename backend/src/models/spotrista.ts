import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sportista = new Schema(
    {
        imeprezime: {
            type: String
        },
        zemlja: {
            type: String
        },
        sport: {
            type: String
        },
        disciplina: {
            type: Array
        },
        pol: {
            type: String
        },
        medalja: {
            type: Number
        }
    }
);

export default mongoose.model('Sportista', Sportista, 'sportisti');

