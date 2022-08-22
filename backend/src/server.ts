import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import zemljaRouter from './routes/zemlja.routes';
import sportistaRouter from './routes/sportista.routes';
import sportovidisciplineRouter from './routes/sportdisciplina.routes';
import takmicenjeRouter from './routes/takmicenje.routes';
import ekipaRouter from './routes/ekipa.routes';
import rasporedRouter from './routes/raspored.routes';
import rezultatRouter from './routes/rezultat.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/olimpijada');

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Pristup bazi podataka uspesno ostvaren.')
});

const router = express.Router();
router.use('/korisnici', korisnikRouter);
router.use('/zemlje', zemljaRouter);
router.use('/sportisti', sportistaRouter);
router.use('/sportovidiscipline', sportovidisciplineRouter);
router.use('/takmicenja', takmicenjeRouter);
router.use('/ekipe', ekipaRouter);
router.use('/raspored', rasporedRouter);
router.use('/rezultat', rezultatRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));