// take an integer as an argument and return "Even" for even numbers or "Odd" for odd numbers
function evenOrOdd(num) {
  if(num % 2 === 0){return 'Even'}
  else{return 'Odd'}
}
      

// transform a number into a string
function numToStr(num) {
    return num.toString()
}


// take a boolean value and return a "Yes" string for true, or a "No" string for false
function boolToStr(bool){
  return bool ? 'Yes' : 'No'
}


// Create a function that can transform a string into a number
function strToNum(str){
    return Number(str)
}


// given an integer or a floating-point number, find its opposite

function oppositeNum(num) {
  return (num = -num)
  // BETTER: just return(-num)
}


// given a number and have to make it negative
function makeNegative(num) {
  return -Math.abs(num)
}


// reverse the string passed into it
function reverseStr(str) {
  return str.split("").reverse().join("")
}


// repeat the given string string exactly n times
function repeatStr(n, str) {
  return str.repeat(n)
}

// remove the first and last characters of a string
function firstAndLast(str) {
  return str.slice(1, str.length -1)
  // BETTER: str.slice(1, -1)
}

