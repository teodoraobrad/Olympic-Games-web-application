import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let PodrzaniSportDisciplina = new Schema(
    {
        sport: {
            type: String
        },
        disciplina: {
            type: Array
        }
    }
);

export default mongoose.model('PodrzaniSportDisciplina', PodrzaniSportDisciplina, 'podrzaniSportoviDiscipline');