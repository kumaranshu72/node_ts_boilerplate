//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('helloworld', () => {
    /*
      * Test the /GET route
      */
    describe('/GET /', () => {
        it('it should GET helloworld', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });
});
//# sourceMappingURL=hello.spec.js.map