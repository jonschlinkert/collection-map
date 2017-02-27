# collection-map [![NPM version](https://img.shields.io/npm/v/collection-map.svg?style=flat)](https://www.npmjs.com/package/collection-map) [![Build Status](https://img.shields.io/travis/jonschlinkert/collection-map.svg?style=flat)](https://travis-ci.org/jonschlinkert/collection-map)

> Returns an array of mapped values from an array or object.

Inspired by the [collections/map][mout] util in mout.

## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save collection-map
```
Install with [bower](https://bower.io/)

```sh
$ bower install collection-map --save
```

## Usage

```js
var map = require('collection-map');
```

### objects

**map object values**

```js
var obj = {a: 'foo', b: 'bar', c: 'baz'};
var res = map(obj, function(item, i, arr) {
  return item;
});

// res => ['foo', 'bar', 'baz']
```

**index is exposed as the second param**

```js
var res = map(obj, function(item, i, arr) {
  return i;
});

// res => [0, 1, 2]
```

### arrays

**map array values**

```js
var arr = ['foo', 'bar', 'baz'];
var res = map(arr, function(item, i, arr) {
  return item;
});

// res => ['foo', 'bar', 'baz']
```

**index is exposed as the second param**

```js
var arr = ['foo', 'bar', 'baz'];
var res = map(arr, function(item, i, arr) {
  return i;
});

// res => [0, 1, 2]
```

### strings

**works with strings**

```js
var obj = {
  a: {aaa: 'one', bbb: 'four', ccc: 'seven'},
  b: {aaa: 'two', bbb: 'five', ccc: 'eight'},
  c: {aaa: 'three', bbb: 'six', ccc: 'nine'}
};

var arr = [obj.a, obj.b, obj.c];

var res = map(obj, 'aaa');
// res => ['one', 'two', 'three']

var res = map(arr, 'bbb');
// res => ['four', 'five', 'six']
```

### this

**exposes the third argument as `this`**

```js
var arr = ['a', 'b', 'c'];
var ctx = {a: 'aaa', b: 'bbb', c: 'ccc'};

var res = map(arr, function(item, i, arr) {
  return this[item];
}, ctx);

// res => ['aaa', 'bbb', 'ccc']
```

## Related projects
- [arr-map](https://www.npmjs.com/package/arr-map): Faster, node.js focused alternative to JavaScript's native array map. | [homepage](https://github.com/jonschlinkert/arr-map "Faster, node.js focused alternative to JavaScript's native array map.")
- [for-own](https://www.npmjs.com/package/for-own): Iterate over the own enumerable properties of an object, and return an object with properties… [more](https://github.com/jonschlinkert/for-own) | [homepage](https://github.com/jonschlinkert/for-own "Iterate over the own enumerable properties of an object, and return an object with properties that evaluate to true from the callback. Exit early by returning `false`. JavaScript/Node.js.")
- [make-iterator](https://www.npmjs.com/package/make-iterator): Convert an argument into a valid iterator. Based on the `.makeIterator()` implementation in mout https://github.com/mout/mout. | [homepage](https://github.com/jonschlinkert/make-iterator "Convert an argument into a valid iterator. Based on the `.makeIterator()` implementation in mout https://github.com/mout/mout.")  

## Running tests
Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Author
**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

## License
Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.2, on February 26, 2017._

[mout]: http://moutjs.com/