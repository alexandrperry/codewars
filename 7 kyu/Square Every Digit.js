function squareDigits(numbers){
var num = numbers.toString();
var arr = new Array();
for(var i=0; i<num.length; i++) {
    arr[i] = num[i] * num[i];
  }
  return Number(arr.join(""));
}