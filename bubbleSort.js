function bubbleSort(arr){
  var length = arr.length;
  console.log("-------------PASSES-----------------");
  for(var i=0; i<length;i++){
    console.log('Before pass %s  : %s', i, arr.join(' '));
    // Second loop compares next value in index 
    for(var j=0; j < length - i - 1; j++){
      // Comparing index values to swap
      if(arr[j]>arr[j+1]){
        //console.log("Swapping %s : %s", arr[j], arr[j+1] );
        //[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        temp = arr[j+1];
        arr[j+1]= arr[j];
        arr[j]= temp;
      }
    }
    console.log('After  pass %s  : %s', i, arr.join(' '));
  }
  console.log();
}

var arrNums = [10, 7, 3, 1, 9, 8, 4, 2];
var arrChars = ['e', 'c', 'b', 'a', 'f', 'h', 'g', 'd'];
var arrCharsMixed = ['e', 'A', 'b', 'a', 'C', 'h', 'g', 'AAA', '1'];
var arrStrings = ["HHH", "GGG", "EEE", "FFF", "AAA", "BBB", "DDD", "CCC"];

console.log('Array Nums    :', arrNums.join(' '),"\n");
bubbleSort(arrNums);
console.log('Array Chars   :', arrChars.join(' '),"\n");
bubbleSort(arrChars);
console.log('Array Strings :', arrStrings.join(' '),"\n");
bubbleSort(arrStrings);
console.log('Array mixed   :', arrCharsMixed.join(' '),"\n");
bubbleSort(arrCharsMixed);

console.log("-------------RESULTS-----------------");
console.log('Array Nums    :', arrNums.join(' '));
console.log('Array Chars   :', arrChars.join(' '));
console.log('Array Strings :', arrStrings.join(' '));
console.log('Array mixed   :', arrCharsMixed.join(' '));