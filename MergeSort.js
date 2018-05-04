// @ts-check

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    var middle = Math.floor(arr.length / 2); console.log("Middle : ", middle);
    var left = arr.slice(0, middle); console.log("Left : ", left);
    var right = arr.slice(middle); console.log("Right : ", right);

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexLeft]) {
            result.push(left[indexLeft]);
            indexLeft++;
        }else{
            result.push(right[indexRight]);
            indexRight++
        }
    }
return result.concat(left.slice(indexLeft).concat(right.slice(indexRight))); 

}

var arrNums = [10, 7, 3, 1, 9, 8, 4, 2];
var arrChars = ['e', 'c', 'b', 'a', 'f', 'h', 'g', 'd'];
var arrCharsMixed = ['e', 'A', 'b', 'a', 'C', 'h', 'g', 'AAA', '1'];
var arrStrings = ["HHH", "GGG", "EEE", "FFF", "AAA", "BBB", "DDD", "CCC"];

console.log('Array Nums    :', arrNums.join(' '), "\n");
mergeSort(arrNums);
console.log('Array Chars   :', arrChars.join(' '), "\n");
mergeSort(arrChars);
console.log('Array Strings :', arrStrings.join(' '), "\n");
mergeSort(arrStrings);
console.log('Array mixed   :', arrCharsMixed.join(' '), "\n");
mergeSort(arrCharsMixed);

console.log("-------------RESULTS-----------------");
console.log('Array Nums    :', arrNums.join(' '));
console.log('Array Chars   :', arrChars.join(' '));
console.log('Array Strings :', arrStrings.join(' '));
console.log('Array mixed   :', arrCharsMixed.join(' '));