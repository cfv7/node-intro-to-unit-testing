const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');
describe('fizzBuzzer', function() {
  it('tests normal cases and should output fizz, buzz, fizz-buzz or num', function() {
    var normalCases = [
      [4, 4],
      [3, 'fizz'],
      [5, 'buzz'],
      [15, 'fizz-buzz']
    ];
    normalCases.forEach(function(input) {
      // input = [4, 4]
      fizzBuzzer(input[0]).should.equal(input[1]);
    }); 
  });
  it('should raise error if args not numbers',
  function(){
    var edgeCases = [false, '1', 'mango'];
  //   edgeCases.forEach(function(input){
  //     fizzBuzzer(input).should.throw(Error);
  //   });
    edgeCases.forEach(function(input) {
    (function() {
        fizzBuzzer(input)
    }).should.throw(Error);
    });
  });
});