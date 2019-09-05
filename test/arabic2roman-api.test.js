var supertest = require('supertest');
var chai = require('chai');
var should = require('should');
var assert = require('assert');
var app = require('../app/app');

//Levanta en background el server para hacer test
var request = supertest(app);
var expect = chai.expect;

describe('GET /convert:number', function(){
    it('should return code 200',function(done){
        request.get('/convert/30')
        .expect(200)
        .end(function(err,res){
            if(err) return done (err);
            done(err);
        });
    });

    it('should return JSON Content-Type application/Json',function(done){
        request.get('/convert/10')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err);
            done(err);
        });
    });

    it('should return a correct JSON Object',function(done){
        request.get('/convert/2')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            done();
        });
    });

    it('should return a result params in the body',function(done){
        request.get('/convert/2')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            done();
        });
    });

    it('should return a correct answer',function(done){
        request.get('/convert/5')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            assert.equal('V',res.body.result);
            done();
        });
    });

    it('should return the message: ',function(done){
        request.get('/convert/101')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body.result);
            assert.equal('ERROR, The number must be between 0 and 100',res.body.result);
            done();
        });
    });

    
});