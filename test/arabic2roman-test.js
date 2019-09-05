const assert = require('assert');
const arabic2roman = require('../app/arabic2roman');


beforeEach(()=>{
});

describe('Arabic2Roman',()=>{

    it ('Should return the roman representation if a number is sended',()=>{
        let result = arabic2roman.convert(3);
        assert.equal('III',result);
    });

    it ('Should return ERROR, no es número if a string is sended',()=>{
        let result = arabic2roman.convert('a');
        assert.equal('ERROR, no es número',result);
    });

    it ('Should return ERROR, The number must be between 0 and 100 if the number sended is not between 0 and 100',()=>{
        let result = arabic2roman.convert(101);
        assert.equal('ERROR, The number must be between 0 and 100',result);
    });

    it ('Should return There is nothing to convert',()=>{
        let result = arabic2roman.convert();
        assert.equal('There is nothing to convert',result);
    });
});