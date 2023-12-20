var request = require('supertest');
var app = require('../index.js');

describe('GET /will', function() {
    it('respond with This is Will\'s page!', function(done) {
        request(app).get('/will').expect('{"response": "This is Will\'s page!"}', done);
    });
});