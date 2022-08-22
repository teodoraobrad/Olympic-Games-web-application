import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Lokacija = new Schema(
    {
        naziv: {
            type: String
        }
    }
);

export default mongoose.model('Lokacija', Lokacija, 'lokacije');