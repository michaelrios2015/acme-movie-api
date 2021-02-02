const express = require('express');
const app = express();
const { models: { Movie, Actor, Role } } = require('./db');
// const cors = require('cors');

// app.use(cors());

module.exports = app;

app.get('/', (req, res)=> {
    res.send(`
        <html>
            <body>
                The Acme API PART II the revenge ;)
            </body>
        </html>
    `)
});

app.get('/api/movies', async(req, res, next)=> {
    try {
        res.send(await Movie.findAll());
    }
    catch(ex){
        next(ex);
    }
})

app.get('/api/roles', async(req, res, next)=> {
    try {
        res.send(await Role.findAll());
    }
    catch(ex){
        next(ex);
    }
})

app.get('/api/actors', async(req, res, next)=> {
    try {
        res.send(await Actor.findAll());
    }
    catch(ex){
        next(ex);
    }
})