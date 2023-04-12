import express from 'express';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import config from './config/config.js';


const app = express();

app.use(express.json());
app.use(compression({ level: 9, compress: true, threshold: 0 }));
app.use(express.static(path.join('public')));
app.use(cors());


app.get('/', (req, res) => {
    try{
        res.status(200).render('index.html')
    } catch (err) {
    res.send(err.message);
    }
});

const Port = config.server.port;
const host = config.server.host;
const db_host = config.mongo.host;
const db_Port = config.mongo.port;
const db_dbName = config.mongo.dbName;


app.listen(Port,() => {
    console.log(`app listening on http://${host}:${Port}`)
});

console.log();