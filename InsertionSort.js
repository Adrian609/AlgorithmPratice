function insertionSort(arr) {
    var len = arr.length;
    console.log("---------Begin------------");
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        console.log("Before pass %s : %s", i, arr.join(" "));
        for (var j = i - 1; j >= 0 && (arr[j] > temp); j--) {
            //console.log("Swapping %s : %s ", temp, arr[j]);
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
        console.log("After  pass %s : %s", i, arr.join(" "));
    }
    console.log("---------END------------ \n");
}

var arrNums = [10, 7, 3, 1, 9, 8, 4, 2];
var arrChars = ['e', 'c', 'b', 'a', 'f', 'h', 'g', 'd'];
var arrCharsMixed = ['e', 'A', 'b', 'a', 'C', 'h', 'g', 'AAA', '1'];
var arrStrings = ["HHH", "GGG", "EEE", "FFF", "AAA", "BBB", "DDD", "CCC"];

console.log('Array Nums    :', arrNums.join(' '), "\n");
insertionSort(arrNums);
console.log('Array Chars   :', arrChars.join(' '), "\n");
insertionSort(arrChars);
console.log('Array Strings :', arrStrings.join(' '), "\n");
insertionSort(arrStrings);
console.log('Array mixed   :', arrCharsMixed.join(' '), "\n");
insertionSort(arrCharsMixed);

console.log("-------------RESULTS-----------------");
console.log('Array Nums    :', arrNums.join(' '));
console.log('Array Chars   :', arrChars.join(' '));
console.log('Array Strings :', arrStrings.join(' '));
console.log('Array mixed   :', arrCharsMixed.join(' '));