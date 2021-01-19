'use strict';
const express = require('express');
const path = require('path');
const cors = require("cors");
const rateLimit = require("express-rate-limit");
var fs = require('fs');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

const app = express();
app.set('trust proxy', 1);
app.use(express.json());
app.use(cors());

let data = JSON.parse(fs.readFileSync('../python/summarized.json'));


app.post('/api/search', (req, res) => {
    let search = {
        dni: req.body.dni,
        party: req.body.party,
        location: req.body.location,
        sentencia: req.body.sentencia === "" ? undefined : req.body.sentencia === '0' ? false : true,
        sex: req.body.sexo === "" ? undefined : req.body.sexo,
        education: req.body.education === "" ? undefined : req.body.education

    }
    let result = data
        //DNI
        .filter(e => {
            return search.dni !== undefined ? e.documentId === search.dni : true;
        })
        //Partido
        .filter(e => {
            return search.party.includes(e.party.partyId);
        })
        //Departamento
        .filter(e => {
            return search.location !== undefined ? e.location.provincia === search.location : true;
        })
        //Sentencia
        .filter(e => {
            return search.sentencia !== undefined ? e.sentencia == search.sentencia : true;
        })
        //Sexo
        .filter(e => {
            return search.sex !== undefined ? e.sex == search.sex : true;
        })
        //Education.
        .filter(e => {
            return search.education !== undefined ? e.education[search.education] : true;
        });
    //Shuffle the Array. only if > 100 elements
    //It's probably not randomized ie: same probablity, but does the job
    if (result.length > 100) {
        for (let i = 0; i < result.length; i++) {
            let randomPosition = Math.floor(Math.random() * result.length);
            //Swap i with random position
            let tmp = result[i];
            result[i] = result[randomPosition];
            result[randomPosition] = tmp;
        }
    }


    res.json(result);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('App is listening on port ' + port);
});

