import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let SportDisciplinaT = new Schema(
    {
        naziv: {
            type: String
        },
        tip: {
            type: String
        }
    }
);

export default mongoose.model('SportDisciplinaT', SportDisciplinaT, 'sportoviDisciplineNaziv');