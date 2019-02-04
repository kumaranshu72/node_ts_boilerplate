"use strict";

//Require the dev-dependencies
var chai = require('chai');

var chaiHttp = require('chai-http');

var server = require('../app');

var should = chai.should();
chai.use(chaiHttp); //Our parent block

describe('helloworld', function () {
  /*
    * Test the /GET route
    */
  describe('/GET /', function () {
    it('it should GET helloworld', function (done) {
      chai.request(server).get('/').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});