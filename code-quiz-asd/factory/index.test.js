/* eslint-env es6, mocha, */
/* global chai, sinon, someFunction */
/* eslint no-console: 0 */
'use strict';

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const mock = window.mock = sinon.mock;
const should = window.should = chai.should();

describe('factory()', function () {
  it('should exist and be a function', function () {
    expect(factory).to.be.a('function');
  });
  
  it('should return an object', function () {
    expect(factory('id', 0, 0, 0, 0)).to.be.a('object');
  });

  it('should give the passed id to the object', function () {
    expect(factory('id', 0, 0, 0, 0).id === 'id').to.be.true;
    expect(factory('cat', 1, 2, 3, 4).id === 'cat').to.be.true;
  });

  it('should give the passed x value to the object', function () {
    expect(factory('id', 0, 0, 0, 0).x === 0).to.be.true;
    expect(factory('cat', 1, 2, 3, 4).x === 1).to.be.true;
  });

  it('should give the passed y value to the object', function () {
    expect(factory('id', 0, 0, 0, 0).y === 0).to.be.true;
    expect(factory('cat', 1, 2, 3, 4).y === 2).to.be.true;
  });

  it('should give the passed speedX value to the object', function () {
    expect(factory('id', 0, 0, 0, 0).speedX === 0).to.be.true;
    expect(factory('cat', 1, 2, 3, 4).speedX === 3).to.be.true;
  });

  it('should give the passed speedY value to the object', function () {
    expect(factory('id', 0, 0, 0, 0).speedY === 0).to.be.true;
    expect(factory('cat', 1, 2, 3, 4).speedY === 4).to.be.true;
  });
});
