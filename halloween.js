
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();

let halloweenYear = today.getFullYear();

if (mm >9){
  halloweenYear++;
}
var halloween = new Date(halloweenYear,9,31);
console.log(halloween);

var timeDiff = Math.abs(halloween.getTime() - today.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays);
