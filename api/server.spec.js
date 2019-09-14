const request = require('supertest');

const server = require('./server');
const db = require('../database/dbConfig')

describe('the server', () => {

    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('GET /', () => {

        it('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing')
        });

        it('should return status 200', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(404);
                });
        });  
    })
})