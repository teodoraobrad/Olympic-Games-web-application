import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let SportDisciplina = new Schema(
    {
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        vrsta: {
            type: String
        },
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    }
);

export default mongoose.model('SportDisciplina', SportDisciplina, 'sportovidiscipline');