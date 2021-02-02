const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', ()=> {
    beforeEach(()=> syncAndSeed());
    describe('GET /', ()=> {
        it('show information about the api', async()=> {
            const response = await app.get('/');
            expect(response.status).to.equal(200);
            expect(response.text).to.include(';)')
        })
    })
    describe('GET /api/movies', ()=> {
        it('return movies', async()=> {
            const response = await app.get('/api/movies');
            // console.log(response)
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(4);
        })
    })
    describe('GET /api/roles', ()=> {
        it('return roles', async()=> {
            const response = await app.get('/api/roles');
            // console.log(response)
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(6);
        })
    })
    describe('GET /api/actors', ()=> {
        it('return roles', async()=> {
            const response = await app.get('/api/actors');
            // console.log(response)
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(5);
        })
    })
})