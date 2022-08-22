import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zemlja = new Schema(
    {
        naziv: {
            type: String
        },
        rang: {
            type: Number
        },
        takmicara: {
            type: Number
        },
        zlato: {
            type: Number
        },
        srebro: {
            type: Number
        },
        bronza: {
            type: Number
        }
    }
);

export default mongoose.model('Zemlja', Zemlja, 'zemlje');