const chai = require('chai'); // untuk testing
const chaiHttp = require('chai-http'); // untuk tesing endpoint
const { expect } = require('chai');
const server = require('./main');

chai.use(chaiHttp);

// Test endpoint GET product
// expektasi
// status 200
// ada data message dan data products

describe('API Test', () => {
  describe('GET /product', () => {
    it('should return data products', async () => {
      try {
        const res = await chai.request(server).get('/product');

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('Data products');
      } catch (error) {
        throw error;
      }
    });
  });
});
