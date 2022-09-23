// *** CODEWARS (8 KYU) ***

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


// given a non-empty array of integers, return the result of multiplying the values together in order
function multiplyArray(arr) {
  return arr.reduce((acc,c) => acc * c)
}


// calculate bmi (< 18.5 = underweight, < 25 = normal, < 30 = overweight, > 30 = obese)
function bmi(weight, height) {
  let result =  weight / (height * height)
  if (result < 18.5){
      return 'Underweight'
  } else if (result < 25.0) {
      return 'Normal'
  } else if (result < 30.0) {
      return 'Overweight'
  } else if (result > 30) {
      return 'Obese'
  }
}


// sum two arrays
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc,c) => acc + c) + arr2.reduce((acc,c) => acc + c)
  // could've concatenated or combined the arrays first, then reduced
}


// a function that does four basic mathematical operations
function basicOp(operation, value1, value2) {
  if (operation === '+'){
    return value1 + value2
  } else if (operation === '-'){
    return value1 - value2
  } else if (operation === '*'){
    return value1 * value2
  } else if (operation === '/'){
    return value1 / value2
  }
  // switch would also work
}


// if name starts with r, you play the banjo
function doYouPlayBanjo(name) {
  if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
  // better: name[0].toLowerCase() === 'r
}


// convert DNA to RNA
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}


// multiply by 8 if number is even, otherwise by nine
function multiplyNumber(num) {
  if (num % 2 === 0){
    return num * 8
  } else {
    return num * 9
  }
  // alt: ternary n % 2 == 0 ? n * 8 : n * 9
}


// sum arrays
function sumArrays(nums) {
  return nums.reduce((acc,c) => acc + c, 0)
}


// estimate stairs climbed in 20 years. given an array of weekdays, each weekday is an array - the data represents 1 year
// access nested array, and add up all the values, then multiply by 20
function stairsIn20(s) {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      total += s[i][j]
    }
  }
  return total * 20
}


// convert a name into initials (strictly 2 words with one space)
function abbrName(name) {
  let initials = name.split(' ').map((x) => x[0]).join('.')
  return initials.toUpperCase()
}


// create 2 functions to find highest and lowest values of a list
// alt: anonymous function: const min = (list) => Math.min(...list), or sort list and return index 0
function min(list) {
  return Math.min.apply(Math, list)
}
function max(list) {
  return Math.max.apply(Math, list)
}


// add numbers in given array, except highest and lowest value
function sumArray(arr) {
  return array ? array.sort((a,b) => a-b).slice(1,-1).reduce((acc,c) => acc + c, 0) : 0
}


// populate an array with all numbers up to and including given number
function countNums(num) {
  let count = []
  for(let i = 1; i <= n; i++){
    count.push(i)
  }
  return count
}


// convert array of words into single sentence
function createSentence(words) {
  return words.join(' ')
}


// rock, paper, scissors - who won?
function rockPaperScissors(p1,p2) {
  if(p1 === 'scissors' && p2 === 'paper'
  || p1 === 'paper' && p2 === 'rock'
  || p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!'
  } else if(p1 === p2){
    return 'Draw!'
  } else{
    return 'Player 2 won!'
  }
}


// is it divisible by 2 numbers?
function divideBy(num,a,b) {
  return num % a === 0 && num % b === 0 ? true : false
}
function DivideBy2(num, a, b) {return num%a + num%b === 0}


// calculate the cost of renting a car - every day costs $40, 7 or more days = $50 off your total,  3 or more days = $20 off your total
function rentalCarCost(d) {
  let total = d * 40
  if(d >= 7){
    total = total - 50
  } else if(d >= 3){
    total = total - 20
  }
  return total
}


// calculate volume of cuboid
function volumeOfCuboid(length, width, height) {
  return length * width * height
}


// personalized greeting
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}


// return area if square, return perimiter if rectangle
function areaOrPerimiter(l, w) {
  return l === w ? l * w : (l * 2) + (w * 2)
}


// given an array of integers, count the positives & sum the negatives, 0 is neither, return empty array if empty or null
function countPositivesSumNegatives(input) {
  let newArr = []
  let x = 0
  let y = 0
  
  if(input != null && input != 0){
  input.forEach(element => {
    if(element > 0){
        x += 1
    } else if(element < 0){
        y += element
    }
  })
  newArr = [x,y]}
  return newArr
} // chunky looking code, but it works - this one was a STRUGGLE


// convert string to array of words
function stringToArray(string){
  return string.split(' ')
}


// multiply two numbers
let multiply = (num1, num2) => num1 * num2


// check if string is all uppercase
function isUpperCase(str) {
  return str === str.toUpperCase() ? true : false
}


// will you escape the shark? shark distance, shark speed, your speed, distance to pontoon, dolphin?(halfs the swim speed of shark)
function sharkAttack(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin == true){
    return pontoonDistance / youSpeed <= sharkDistance / (sharkSpeed / 2) ? 'Alive!' : 'Shark Bait!'
  }
  return pontoonDistance / youSpeed <= sharkDistance / sharkSpeed ? 'Alive!' : 'Shark Bait!'
}


// plural or not ?
function plural(n) {
  return n !== 1 ? true : false
}


// convert number to reversed array of digits
function reverseArray(num){
  return String(num).split('').reverse().map(Number)
}


// find average of 3 scores, and return letter accosiated with that grade
function letterGrade(score1, score2, score3) {
  let average = (s1 + s2 + s3) / 3
    if(average >= 90 && average <= 100){
      return 'A'
    } else if(average >= 80 && average < 90){
      return 'B'
    } else if(average >= 70 && average < 80){
      return 'C'
    } else if(average >= 60 && average < 70){
      return 'D'
    } else if(average >= 0 && average < 60){
      return 'F'
    }

  // SIMPLER:
  /* 
    if (average < 60)  return "F";
    else if (average < 70) return "D";
    else if (average < 80) return "C";
    else if (average < 90) return "B";
    else return "A"; */
}


function sameFirstAndLast(beast, dish) {
  if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
    return true
  } else {
    return false
  }

  //SIMPLER:
  // return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


// can all the passengers fit on the bus? yes => return 0, no => return number of people left behind
// cap = total seats, on = passengers already on, wait = number of people waiting
function busPassengers(cap, on, wait) {
  if(on + wait < cap){
    return 0
  } else {
    Math.abs(cap - (on + wait))
  }
}


// given 2 angles of a triangle, return the 3rd angle
function otherAngle(a, b) {
  return 180 - (a + b)
}


// provided a number between 0-9, return it as a word  -- encouraged to use switch statement
function numToWord(num) {
  switch (num) {
    case 0 :
      return 'Zero'
    case 1 :
      return 'One'
    case 2 :
      return 'Two'
    case 3 :
      return 'Three'
    case 4 :
      return 'Four'
    case 5 :
      return 'Five'
    case 6 :
      return 'Six'
    case 7 :
      return 'Seven'
    case 8 :
      return 'Eight'
    case 9 :
      return 'Nine'
  }
}


// make a traffic light: takes in current color, and updates to the next
function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow'
    case 'yellow':
      return 'red'
    case 'red':
      return 'green'
  }

  // SIMPLER:
  // return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}


// count by X
function countBy(n, x){
  let result = []
  for (let i = 1; i < x + 1; i++) {
    result.push(i * n)
  }
  return result
}


// is the string uppercase?
String.prototype.isUpperCase = function() {
  return this === this.toUpperCase()
}


// find multiples of given number, up to given limit
function findMultiples(integer, limit) {
  let result = []
  for (let i = 1; (i * integer) <= limit; i++) { 
    result.push(i * integer)
    // OR: for (let i = int; i<=limit ; i+=int)
    // result.push(i)
  }
  return result
}


// reverse names (firstname lastname => lastname firstname)
function reverseName(str) {
  return str.split(' ').reverse().join(' ')
}


// duplicate all characters in string
function doubleChar(str) {
  return str.split('').map(i => [i+i]).join('')
}


// generate array of integers between (and including) given integers
function betweenNums(a, b){
  let array = []
  for(let i = a; i <= b; i++){
    array.push(i)
  }
  return array
}


// create an array and fill it with integers from 0 to 1 below given integer
function populateArray(num){
  let array = []
  for(let i = 0; i < num; i++){
    array.push(i)
  }
  return array
}


// check if integer is a factor of base
function checkForFactor(base, factor){
  return (base % factor) === 0 ? true : false
}


// terminal game, given current position and roll of dice - player moves number of spaces twice
function gameMoves(position, roll){
  return position + (roll * 2)
}


// convert speed from km/h to cm/h, rounded down
function speedConverter(speed){
  return Math.floor(speed / 0.036)
}


// given a string 'x years old', return the age as an integer
function getAge(inputString){
  return  parseInt(inputString[0])
}


// encouraging messages when practicing hula hooping
function hoopCount (n) {
  if(n < 10){
    return 'Keep at it until you get it'
  } else {
    return 'Great, now move on to tricks'
  }
}


// function for final grade with two parameters: a grade for the exam and a number of completed projects
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10){
    return 100
  } else if (exam > 75 && projects >= 5){
    return 90
  } else if (exam > 50 && projects >= 2){
    return 75
  } else {
    return 0
  }
  // could have used separate if statements
}


// human, cat and dog years
function yearsHumanCatDog(humanYears){
  // cat years = 15 for first human year, + 9 for second, + 4 for each after that
  let catYears = 0
  // dog years = 15 for first human year, + 9 for second, + 5 for each after that
  let dogYears = 0
  
  if(humanYears === 1){
    catYears = 15
    dogYears = 15
  }
  if(humanYears === 2){
    catYears = 15 + 9
    dogYears = 15 + 9
  }
  if(humanYears > 2){
    catYears = 15 + 9 + ((humanYears - 2) * 4)
    dogYears = 15 + 9 + ((humanYears - 2) * 5)
  }
  return [humanYears,catYears,dogYears]
}


// plucking flower petals, what phrase is on the last petal?
// make array of phrases, and return number of petals - 1 % array.length
function flowerPetals(numPetals){
  let phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]

  return phrases[(numPetals - 1) % phrases.length]
}


// check if string is palindrome
function palindromeCheck(str){
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}


// filter out the geese
function filterGeese(arr){
  let geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']

  return arr.filter(element => !geese.includes(element))
}


// return milliseconds since midnight; given hours, minutes and seconds
// hours = 3.6 × 1000000, minutes = minutes x 60000, seconds = seconds x 1000
function timePastMidnight(h, m, s,){
  return Math.floor((h * 3.6 * 1000000) + (m * 60000) + (s * 1000))
  // SIMPLER: return ((h*3600)+(m*60)+s)*1000
}


// check if you have enough fuel to reach the station
function enoughFuel(distanceToPump, mpg, fuelLeft){
  return (mpg * fuelLeft) >= distanceToPump
}


// remove all exclamation marks from given string
function removeExclamationMarks(str){
  return str.split('').filter(element => !element.includes('!')).join('')
}


// remove every second element from array
function removeSecond(arr) {
  return arr.filter((x,y) => y % 2 === 0)
}


// mark object as frozen to prevent changes
Object.freeze(ObjectToFreeze)


// calculate price for billboard (£30 per letter), not allowed to use *
function billboard(name, price = 30){
  let total = 0
  for(let i = 0; i < name.length; i++){
    total += price
  }
  return total
}


// Messi scores goals in three leagues, return the total number of goals
function messiGoals(laLigaGoals, copaDelReyGoals, championsLeagueGoals){
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// remove an exclamation mark from the end of the string
function removeExclamation(str){
  return str.endsWith('!') ? str.slice(0, -1) : str
}


// return comma-separated values of a two-dimensional numeric array
function toCSVText(arr){
  return arr.join('\n')
}


// binary to decimal
function binaryToDecimal(bin){
  return parseInt(bin, 2)
}


// check if variable matches type
function typeValidation(variable, type){
  return type === typeof variable
}


// return list of all the powers of 2 with the exponent ranging from 0 to n (inclusive)
function powerOfTwo(n){
  let result = []
  let i = 0
  do {
    result.push(Math.pow(2, i))
    i++
  } while (i <= n)
    return result
}


// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// a,b,c have to come in that order, I can foresee 6 variations
function expressionsMatter(a,b,c){
  let result = a + b + c
  if ((a + b) * c > result){
    result = (a + b) * c
  }
  if (a + (b * c) > result){
    result = a + (b * c)
  }
  if ((a * b) + c > result){
    result = (a * b) + c
  }
  if (a * (b + c) > result){
    result = a * (b + c)
  }
  if (a * b * c > result){
    result = a * b * c
  }
  return result
  
  // BETTER: Math.max(all the variations listed)
}


// given month, return the quarter it belongs to
function quarterOf(month){
  switch (month) {
    case 1: case 2: case 3:
      return 1
    case 4: case 5: case 6:
      return 2
    case 7: case 8: case 9:
      return 3
    case 10: case 11: case 12:
      return 4
  }
}


// check array for good or bad ideas - 1 or 2 good ones => return 'Publish!', more than 2 good ones => return 'I smell a series!', otherwise return 'Fail!'
function goodOrBad(arr){
  let goodIdeas = arr.filter(element => element.includes('good'))
  if (goodIdeas.length > 2){
    return 'I smell a series!'
  } else if (goodIdeas.length === 0){
    return 'Fail!'
  } else {
    return 'Publish!'
  }
}


// return true if argument evaluates to NaN, false otherwise
function isReallyNaN(val){
  return Number.isNaN(val)
}


// check if ship is worthy to loot based on weight, figuring out if the weight is booty or people
// creator function dakes in draft and crew, each crew adds 1.5 units to draft, draft over 20 excluding crew is loot-worthy
Ship.prototype.isWorthIt = function(){
  return this.draft - (this.crew * 1.5) > 20
}


// create a welcome message that takes in a name, city and state
function sayHello(name, city, state){
  let fullName = name.join(' ')
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
  // BETTER: not necessary to join name seperately, can be done inside template string like so: £{name.join(' ')}
}


// given letter, return it's position in the alphabet
function alphabetPosition(letter){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}


// return array in reverse
function reverseArrayOrder(arr){
  return arr.reverse()
}


// should you set an alarm? if you are employed, and not on vacation => true, otherwise => false
function setAlarm(employed, vacation){
  return employed && !vacation
}


// total amount of points in championship
// wins = 3 points, draws = 1 point, loss = 0 points
function point(games){
  let points = 0
  games.filter(x => {
    if (x[0] > x[2]) {
      points += 3
    } else if(x[0] === x[2]) {
      points += 1
    }
  }) 
  return points
}


// given two characters, check if they are the same case
// if one is not a letter: return -1, if both same case: return 1, if not same case: return 0
function sameCase(x,y){
 if(x.toUpperCase() === x.toLowerCase() || y.toLowerCase() === y.toUpperCase()){
  return -1
 } else if(x === x.toLowerCase() && y === y.toLowerCase() || x === x.toUpperCase() && y === y.toUpperCase()){
  return 1
 } else {
  return 0
 }
}
