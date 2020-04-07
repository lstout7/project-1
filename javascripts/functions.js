//jshint esversion: 7

//req. 3.b
let arrAvg = (arr) => {
  var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
return avg;
};

//req. 3.c
let arrMax = (arr) => {
var largest = 0;
arr.forEach(function(elem){
  if(largest < elem)
  largest = elem;
});

console.log(largest);
};

//req. 3.d INCOMPLETE
let sumEvents = (arr) => {
  let sum = 0;
  for(let i in arr){
    if (i % 2 == 0){
    sum += i;
   }
  }
  return sum;
};
