/*!
 * collection-map <https://github.com/jonschlinkert/collection-map>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */

var assert = require('assert');
var map = require('./');

describe('objects:', function () {
  var obj = {a: 'foo', b: 'bar', c: 'baz'};

  it('should map values:', function () {
    var res = map(obj, function(item, i, arr) {
      return item;
    });
    assert.deepEqual(res, ['foo', 'bar', 'baz']);
  });

  it('should map indices:', function () {
    var res = map(obj, function(item, i, arr) {
      return i;
    });
    assert.deepEqual(res, [0, 1, 2]);
  });
});

describe('arrays:', function () {
  var arr = ['foo', 'bar', 'baz'];

  it('should map values:', function () {
    var res = map(arr, function(item, i, arr) {
      return item;
    });
    assert.deepEqual(res, ['foo', 'bar', 'baz']);
  });

  it('should map indices:', function () {
    var res = map(arr, function(item, i, arr) {
      return i;
    });
    assert.deepEqual(res, [0, 1, 2]);
  });
});

describe('this arg:', function () {
  var arr = ['a', 'b', 'c'];
  var ctx = {a: 'aaa', b: 'bbb', c: 'ccc'};

  it('should expose the third argument as `this`:', function () {
    var res = map(arr, function(item, i, arr) {
      return this[item];
    }, ctx);
    assert.deepEqual(res, ['aaa', 'bbb', 'ccc']);
  });
});

describe('strings:', function () {
  it('should work with strings:', function () {
    var obj = {
      a: {
        aaa: 'one',
        bbb: 'four',
        ccc: 'seven'
      },
      b: {
        aaa: 'two',
        bbb: 'five',
        ccc: 'eight'
      },
      c: {
        aaa: 'three',
        bbb: 'six',
        ccc: 'nine'
      }
    };
    var arr = [obj.a, obj.b, obj.c];
    assert.deepEqual(map(obj, 'aaa'), ['one', 'two', 'three']);
    assert.deepEqual(map(arr, 'bbb'), ['four', 'five', 'six']);
  });
});
