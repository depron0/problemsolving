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


// take the number of petals of each flower and return true if they are in love (one flower even and one odd), and false if they aren't 
function loveFlowers(flower1, flower2) {
  if ((flower1 % 2 === 0 && flower2 % 2 != 0) ||
      (flower1 % 2 != 0 && flower2 % 2 === 0)) {
        return true
      } else {
        return false
      }
  // BETTER: return flower1 % 2 !== flower2 % 2;
}


// copy some paperwork: there are 'n' classmates and the paperwork has 'm' pages, calculate how many blank pages do you need
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  } else {
    return n * m
  }
  // BETTER: return n > 0 && m > 0 ? n * m : 0
}


// check whether the provided array contains the value
function containsValueCheck(a, x) {
  return a.indexOf(x) >= 0 ? true : false
  // ALT: return a.includes(x)
}


// return an array of integers from n to 1 where n>0
function reverseCount(n) {
  let num = []
  for (let i = n; i > 0; i--) {
    num.push(i)
  }

  return num
  // Don't think this works, as it would return the
  do {
    num.push(n)
    n--
  } while (n > 0)

  return num
}


// remove the spaces from the string, then return the result
function removeSpaces(str) {
  return str.split(' ').join('')
  // Alternative: .replace() and RegEx to target the spaces
}


// find the smallest integer in an array
function smallestInt(arr) {
  return Math.min(...arr)
}


// summation of every number from 1 to num
function summation(num) {
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}


// man drinks 0.5l of water per hour of cycling: given time in hours return number of liters drunk rounded down
function drinkWater(time) {
  return Math.floor(time * 0.5)
}


// first century: year 1 up to and including year 100. given a year, return the century it is in 
function whichCentury(year) {
  return Math.floor((year - 1) / 100) + 1
}


// return a greeting statement that uses an input
function greetings(name) {
  return `Hello, ${name} how are you doing today?`
}


// convert the given boolean value into its string representation
function boolToStr(b) {
  return b ? 'true' : 'false'
  // OR b.toString()
}


// return a new array with each value doubled
function doubleValues(x) {
  return x.map(n => n * 2)
}


// find the needle in the haystack (array)
function findNeedle(arr) {
  let needle = arr.findIndex(element => element === "needle")
  return `found the needle at position ${needle}`
  // BETTER: return "found the needle at position " + arr.indexOf("needle");
}


// return the additive inverse of each given number
function invert(arr) {
  return arr.map(element => element * -1)
  // OR: return array.map( x => x === 0 ? x : -x)
}


// convert string to uppercase
function makeUpperCase(str) {
  return str.toUpperCase()
}


// fake binary: digits under 5 = 0, digits over 5 = 1
function fakeBinary(x) {
  return x.split("").map(e => e < 5 ? 0 : 1).join('')
}


// each dragon takes 2 bullets to be defeated, will the hero survive?
function hero(bullets, dragons){
  return bullets >= (dragons * 2) ? true : false
}


// calculate the average of the numbers in a given list
function findAverage(arr) {
  if (arr.length === 0) {
    return 0
  } else {
    let newArray = arr.reduce((acc,c) => acc + c)
    return newArray / arr.length
  }   
  // return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}


// return the average of the given array rounded down to its nearest integer
function averageRoundDown(arr) {
  return Math.floor(arr.reduce((acc,c) => acc + c, 0) / arr.length)
}


// calculate the average and compare your score, return True if you scored higher, else False
function compareScore(classPoints, yourPoints) {
  let classAverage = classPoints.reduce((acc,c) => acc + c) / classPoints.length
  return classAverage < yourPoints ? true : false
}
