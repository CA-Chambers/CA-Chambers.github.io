/* global chai sinon types func number nul string
* array boolean object person addClasses fullName
* reverseArray oddNumbers evenNumbers
*/
"use strict"

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();


///////////////////////////////////////////////////////////////////
//              WRITE YOUR TESTS BELOW HERE
/* globals should nameOfFunctionToTest */

describe('Week 1 Checkpoint', function () {
  'use strict';

  describe('1) Data Types', function () {

    it('should correctly identify a function', function () {
      expect(func).to.be.a('function');
      expect(func).to.eql(types[3]);
    });

    it('should correctly identify a number', function () {
      expect(number).to.be.a('number');
      expect(number).to.eql(types[2]);
    });

    it('should correctly identify a null', function () {
      expect(nul).to.eql(null);
      expect(nul).to.eql(types[4]);
    });

    it('should correctly identify a string', function () {
      expect(string).to.be.a('string');
      expect(string).to.eql(types[0]);
    });

    it('should correctly identify an array', function () {
      expect(Array.isArray(array)).to.be.true;
      expect(array).to.eql(types[6]);
    });

    it('should correctly identify a boolean', function () {
      expect(boolean).to.be.a('boolean');
      expect(boolean).to.eql(types[1]);
    });

    it('should correctly identify an object', function () {
      expect(object).to.be.a('object');
      expect(Array.isArray(object)).to.be.false;

      expect(object).to.eql(types[5]);
    });
  });

  describe('2) Person Object', function () {
    it('should be an object', function () {
      expect(person).to.be.a('object');
    });

    it('should have firstName key', function () {
      expect(person.firstName).to.exist;
      expect(person.firstName).to.be.a('string');
    });

    it('should have lastName key', function () {
      expect(person.lastName).to.exist;
      expect(person.lastName).to.be.a('string');
    });

    it('should have favoriteColor key', function () {
      expect(person.favoriteColor).to.exist;
      expect(person.favoriteColor).to.be.a('string');
    });
  });

  describe('3) fullName Function', function () {
    const person1 = {
      firstName: "bob",
      lastName: "smith"
    }
    
    const person2 = {
      firstName: "jane",
      lastName: "johnson"
    }
    
    it('should return a string', function () {
      const result = fullName(person1);
      expect(result).to.be.a('string');
    });

    it('should return full name', function () {
      const result1 = fullName(person1);
      const answer1 = `${person1.firstName} ${person1.lastName}`;
      expect(result1).to.equal(answer1, "Make sure you separate the first and last name with a space!");
      
      const result2 = fullName(person2);
      const answer2 = `${person2.firstName} ${person2.lastName}`;
      expect(result2).to.equal(answer2, "Make sure you separate the first and last name with a space!");
    });
  });

  describe('4) oddNumbers Function', function () {
    beforeEach(function () {
      sinon.spy(console, 'log');
    });

    afterEach(function () {
      console.log.restore();
    });

    it(`should console log all odd numbers
      from 1 to a given max number`, function () {
      oddNumbers(5);
      expect(console.log.firstCall.calledWith(1)).to.be.true;
      expect(console.log.lastCall.calledWith(5)).to.be.true;
      expect(console.log.callCount).to.equal(3);
    });

    it('should work with any given number', function () {
      oddNumbers(20);
      expect(console.log.firstCall.calledWith(1)).to.be.true;
      expect(console.log.lastCall.calledWith(19)).to.be.true;
      expect(console.log.callCount).to.equal(10);
    });

    it('should work with any given number', function () {
      oddNumbers(33);
      expect(console.log.firstCall.calledWith(1)).to.be.true;
      expect(console.log.lastCall.calledWith(33)).to.be.true;
      expect(console.log.callCount).to.equal(17);
    });
  });
});

describe('5) reverseArray Function', function () {
  beforeEach(function () {
    sinon.spy(Array.prototype, 'reverse');
  });

  afterEach(function () {
    Array.prototype.reverse.restore();
  });

  it('should not use reverse', function () {
    reverseArray([1, 2, 3, 4, 5]);
    expect(Array.prototype.reverse.callCount).to.equal(0);
  });

  it('should return input array in reverse', function () {
    const input = [1, 2, 3, 4, 5];
    const answer = reverseArray(input);
    const result = input.reverse();
    expect(answer).to.eql(result);
  });

  it('should return input array in reverse', function () {
    const input = [5, 4, 3, 2, 1];
    const answer = reverseArray(input);
    const result = input.reverse();
    expect(answer).to.eql(result);
  });

  it('should return input array in reverse', function () {
    const input = ['a', 'b', 'c'];
    const answer = reverseArray(input);
    const result = input.reverse();
    expect(answer).to.eql(result);
  });

});

//               WRITE YOUR TESTS ABOVE HERE
////////////////////////////////////////////////////////////////////
