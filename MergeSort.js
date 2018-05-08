// @ts-check
module.export = function () {
    function mergeSort(arr) {
        if (arr.length === 1) {
            return arr;
        }
        var mergeArr = arr;
        const middle = Math.floor(mergeArr.length / 2);
        const left = mergeArr.slice(0, middle);
        const right = mergeArr.slice(middle, mergeArr.length);
        return merge(mergeSort(left), mergeSort(right));
    }
    function merge(left, right) {
        var sortedArr = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                sortedArr.push(left.shift());
            }
            else {
                sortedArr.push(right.shift());
            }
        }
        while (left.length) {
            sortedArr.push(left.shift());
        }
        while (right.length) {
            sortedArr.push(right.shift());
        }
        return sortedArr;
    }

    var arrNums = [10, 7, 3, 1, 9, 8, 4, 2];
    var arrChars = ['e', 'c', 'b', 'a', 'f', 'h', 'g', 'd'];
    var arrCharsMixed = ['e', 'A', 'b', 'a', 'C', 'h', 'g', 'AAA', '1'];
    var arrStrings = ["HHH", "GGG", "EEE", "FFF", "AAA", "BBB", "DDD", "CCC"];

    console.log("-------------Initial-----------------");
    console.log('Array Nums    :', arrNums.join(' '));
    console.log('Array Chars   :', arrChars.join(' '));
    console.log('Array Strings :', arrStrings.join(' '));
    console.log('Array mixed   :', arrCharsMixed.join(' '));

    console.log("-------------RESULTS-----------------");

    console.log('Array Nums    :', mergeSort([1, 3, 2, 4, 5]).join(" "));
    console.log('Array Nums    :', mergeSort(arrNums).join(" "));

    console.log('Array Chars   :', mergeSort(arrChars).join(" "));
    console.log('Array Strings :', mergeSort(arrStrings).join(" "));
    console.log('Array mixed   :', mergeSort(arrCharsMixed).join(" "));
}