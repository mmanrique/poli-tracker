const express = require('express');

const app = express();
app.use(express.json());


app.use('/api/search', (req, res) => {
    let partidosPoliticos = req.body.partidos
    let provincia = req.body.provincia
    let gradoMax = req.body.grado
    let sentencia = req.body.sentencia
    
})