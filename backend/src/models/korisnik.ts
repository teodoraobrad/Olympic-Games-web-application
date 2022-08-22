import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Korisnik = new Schema(
    {
        korisnickoime: {
            type: String
        },
        lozinka: {
            type: String
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        nacionalnost: {
            type: String
        },
        email: {
            type: String
        },
        tip: {
            type: String
        },
        zahtev:{
            type:Boolean
        }
    }
);

export default mongoose.model('Korisnik', Korisnik, 'korisnici');