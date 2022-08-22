import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Rekord = new Schema(
    {
        godinamesto: {
            type: String
        },
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        takmicar: {
            type: String
        },
        zemlja: {
            type: String
        },
        rekord: {
            type: String
        }
    }
);

export default mongoose.model('Rekord', Rekord, 'rekordi');