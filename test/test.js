const assert = require('chai').assert;
var mergeSort = require("../MergeSort").mergeSort;
//var fromArray = require('stream-array');
//var concat = require('concat-stream');
//var pump = require('pump');
//mergeSortResult = mergeSort([1,3,2,4,5]);

describe("Algo", function () {
  var arr =[ 1, 3, 2, 4, 5];
  new mergeSort(arr);
    

  it('app should return', function () {
    expect(result).to.eql([1,2,3,4,5]);
  });

  it("mergeSort should return an array of ints ", function () {
    assert.typeOf(algo([1, 3, 2, 4, 5]), 'number');
  });
});

function euclidean(a, b) {
	return Math.sqrt(b.x*b.x+b.y*b.y) - Math.sqrt(a.x*a.x+a.y*a.y);
}

function increasing(a, b) {
	return b-a;
}

function toArray(callback) {
	return concat({encoding: 'object'}, callback);
}