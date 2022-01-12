/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const axios = require('axios');
const { execPath } = require('process');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';
chai.use(chaiHttp);

describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should contain a <h1> element for the page title', () => {
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Movie Finder');
      });
  });

  it("should contain a <input> element for user query", () => {
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector("input[id=query]"))
      .then(input => expect(input).to.exist)
  });

  it("should contain a <button> element for searching the user query", () => {
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector("button[id=search]"))
      .then(button => expect(button).to.exist)
  });

  it('should get an object for movie Princesss and the Frog', (done) => {
    chai.request(app)
      .get('/movie/tt0780521')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });

  it('should get an object for movie Robots', (done) => {
    chai.request(app)
      .get('/movie/tt0358082')
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should get an object for movie Up', (done) => {
    chai.request(app)
      .get('/movie/tt1049413')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });

  it('should get an object for movie Finding Nemo', (done) => {
    chai.request(app)
      .get('/movie/tt0266543')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });

  it('should get an object when frog is searched', (done) => {
    chai.request(app)
      .get('/movies/frog')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });

  it('should get an object when nemo is searched', (done) => {
    chai.request(app)
      .get('/movies/nemo')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });

  it('should get an object when up is searched', (done) => {
    chai.request(app)
      .get('/movies/up')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });

  it('should get an object when robots is searched', (done) => {
    chai.request(app)
      .get('/movies/robots')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(err).to.be.null;
        done();
      });
  });



  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

// const url = 'http://localhost:8888';

// const nightmare = new Nightmare();

// describe('End to End Tests', () => {
// 	let httpServer = null;
// 	let pageObject = null;

// 	before((done) => {
// 		httpServer = app.listen(8888);
// 		done();
// 	});

// 	beforeEach(() => {
// 		pageObject = nightmare.goto(url);
// 	});

// 	after((done) => {
// 		httpServer.close();
// 		done();
// 	});

// 	// This is where your code is going to go
// 	it('should contain a <h1> element for the page title', () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector('h1').innerText)
// 			.then(headerText => {
// 				expect(headerText).to.not.be.null;
// 				expect(headerText).to.equal('Mortgage Calculator');
// 			});
// 	});

// 	it("should contain a <input> element for the name principal", () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector("input[name=principal]"))
// 			.then(input => expect(input).to.exist)
// 	});

// 	it("should contain a <input> element for the name interestRate", () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector("input[name=interestRate]"))
// 			.then(input => expect(input).to.exist)
// 	});

// 	it("should contain a <input> element for the name loanTerm", () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector("input[name=loanTerm]"))
// 			.then(input => expect(input).to.exist)
// 	});

// 	it("should contain a <button> element for the id calculate", () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector("button[id=calculate]"))
// 			.then(button => expect(button).to.exist)
// 	});

// 	it("should contain a <p> element for the id output", () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector("p[id=output]"))
// 			.then(p => expect(p).to.exist)
// 	});

// 	it("should contain a <select> element for the name period", () => {
// 		return pageObject
// 			.evaluate(() => document.querySelector("select[name=period]"))
// 			.then((select) => {
// 				expect(select).to.exist;
// 				expect(select).to.not.be.null;
// 				expect(select.length).to.not.equal(0);
// 			});
// 	});
// })
