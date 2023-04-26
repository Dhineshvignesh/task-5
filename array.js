let num = [1,2,3,4,5,6,7,8,9,];

console.log('even numbers are');
for (var i = 1 ; i < 10 ; i += 2 ) {
   console.log(i);
}


console.log('odd numbers are ');
for (var i = 2 ; i < 10 ; i += 2 ) {
  console.log(i);
}
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("welcome to Guvi"));
  const sum = [1, 2, 3].reduce(add, 0); // with initial value to avoid when the array is empty

function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum); 
function sumPrimes(num) {
    //Produce an array containing all number of to and including num
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }
  
    //Remove non-prime numbers from the array     
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
  
   return numArray;
   Array.prototype.rotateRight = function( n ) {
    this.unshift.apply( this, this.splice( n, this.length ) );
    return this;
  }
  let arr = []
let str = words.slice(0)
let pal = str.toString().split("").reverse().join("") 
console.log(pal);


for (let i = 0; i < words.length; i++) {
for (let k = 0; k < pal.length; k++) {
 if (words[i] == pal[k]) {
   arr.push(words[i])
 }
 }
 }
 return arr
 }