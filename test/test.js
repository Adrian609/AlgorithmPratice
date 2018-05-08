const assert = require('chai').assert;
const algo = require("../MergeSort").mergeSort;
//mergeSortResult = mergeSort([1,3,2,4,5]);

describe("Algo", function () {
  it('Hello', function () {
    assert.equal(algo([1, 3, 2, 4, 5]), ([1, 2, 3, 4, 5]));
  });


  it('app should return', function () {
    assert.equal(mergeSort([1, 3, 2, 4, 5]), ([1, 2, 3, 4, 5]));
  });

  it("mergeSort should return an array of ints ", function () {
    assert.typeOf(algo([1, 3, 2, 4, 5]), 'number');
  });
});