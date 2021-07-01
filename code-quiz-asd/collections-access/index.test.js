/* eslint-env es6, mocha, */
/* global chai, sinon, yourAnswerHere */
/* eslint no-console: 0 */
'use strict';

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const mock = window.mock = sinon.mock;
const should = window.should = chai.should();

describe('Array and Object Access', function () {

  yourAnswerHere();
  var fStr = yourAnswerHere.toString();
  var s1Start = fStr.indexOf('sentence1');
  var s2Start = fStr.indexOf('sentence2');
  var s2End = fStr.indexOf('// YOUR CODE ABOVE HERE');
  var yourSolution1 = fStr.slice(s1Start, s2Start).replace( /\s/g, '');
  var answer1 = 'sentence1=arr[2]+obj.fast+obj.color+arr[0];';
  var usesBracketAndDotNotation1 = yourSolution1 === answer1;

  var yourSolution2 = fStr.slice(s2Start, s2End).replace( /\s/g, '');
  var answer2 = "sentence2=obj.verb+arr[3]+arr[2]+obj.slow+arr[1];";
  var usesBracketAndDotNotation2 = yourSolution2 === answer2;

  it('sentence1 should be "the quick brown fox "', function () {
    expect(sentence1).to.be.a('string');
    expect(sentence1).to.equal('the quick brown fox ');
    expect(usesBracketAndDotNotation1, 'you must use bracket notation and dot notation!').to.be.true;
  });

  it('sentence2 should be "jumps over the lazy dog "', function () {
    expect(sentence2).to.be.a('string');
    expect(sentence2).to.equal('jumps over the lazy dog ');
    expect(usesBracketAndDotNotation2, 'you must use bracket notation and dot notation!').to.be.true;
  });
  
});
