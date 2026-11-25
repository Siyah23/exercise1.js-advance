//Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(x, y, z) {
  return x * y * z;
}
let product = multiply(3, 4, 5)
console.log(product);

//Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
let convertToSeconds = function(minutes) {
  return minutes * 60
}
console.log(convertToSeconds(3));

//Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
console.log(fahrenheitToCelsius(23));

//Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(str) {
  return str.split("").reverse().join("")
}
console.log(reverseString("hello"));

//Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function countVowels(str) {
  let count = 0;
  const Vowels = "aeiou";
  for (let char of str.toLowerCase ()) {
    if (Vowels.includes(char)){
      count++;
    }
  }
  return count;
  }
console.log(countVowels("Siyamthanda"));

//Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i ===0) {
      return false; 
    }
  }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(8));
console.log(isPrime(23));