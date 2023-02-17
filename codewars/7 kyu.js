// *** CODEWARS (7 KYU) ***

// square every number
function squareDigits(num){
    let numArr = num.toString().split('').map(x => Math.pow(x, 2)).join('')
    return parseFloat(numArr)
}


// given a string of space separated numbers, return the highest and lowest number
function highAndLow(nums){
    // convert to array, convert to integer, sort high to low
    let a = nums.split(' ').map(x => parseFloat(x)).sort((a,b) => b-a)
    // create array with highest and lowest value, then join together
    let b = [a[0], a[a.length -1]].join(' ')
    return b
}


// check that all values in the array are below or equal to the limit value, return true or false
function underLimit(arr, limit){
    return arr.reduce((a,b) => Math.max(a,b)) <= limit ? true : false
    // OR: return Math.max(...a) <= limit
}


// rearrange numbers into descending order (given as integer, return as integer)
function descendingOrder(num){
    let newNumber = num.toString().split('').sort((a,b) => b - a).join('')
    return +newNumber
}


// return middle of string
function getMiddle(str){
    let middle = ''
    if (str.length % 2 != 0){
    middle = str.substr(str.length / 2, 1)
    } 
    if (str.length % 2 === 0){
    middle = str.substr((str.length / 2) - 1, 2)
    } 
    return middle
}


// return new array with strings filtered out
function filterList(arr){
    return arr.filter(element => typeof(element) === 'number')
}


// return number of vowels in the string (all lowercase, if not: add uppercase variants to vowel array, OR make string lowercase before filter)
function numVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let filtered = str.split('').filter(x => vowels.includes(x))
    return filtered.length
}


// remove all the vowels in the string
function disemvowel(str){
    let vowels = ['a','A','e','E','i','I','o','O','u','U']
    return str.split('').filter(element => !vowels.includes(element)).join('')
}


// find shortest string and return its length
function findShortest(str){
    let shortestWord = str.split(' ').reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest})
    return shortestWord.length
}


// remove given integers contained in second array
function removeValues(integerList, valueList){
    return integerList.filter(element => !valueList.includes(element))
}


// check if array is ascending
function isAscending(arr){
    return arr.join('') === arr.sort((a, b) => a - b).join('')
}


// check which two adjacent numbers in array create the highest result
function adjacentElementsProduct(arr){
    let result = Number.NEGATIVE_INFINITY
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] * arr[i + 1] > result){
            result = arr[i] * arr[i + 1]
        }
    }
  return result  
}


// round to ("greater than or equal") the next multiple of 5
function roundToNextFive(num){
    while (num % 5 != 0) num++
    return num
}


// add two numbers together and returns their sum in binary
function addBinary(a,b){
    return (a + b).toString(2)
}


// Given a Divisor and a Bound, find largest integer N that is: divisible by divisor; less than or equal to bound; greater than 0
// parameters will only be positive values, and guaranteed divisor is found
function findNum(divisor, bound){
    while (bound % divisor != 0){
        bound--
    }
    return bound
    // BETTER: return bound - bound % divisor
}


// return the url with anything after the anchor (#) removed
function removeAnchor(url){
    if (url.indexOf('#') === -1){
        return url
      } else {
      return url.slice(0,url.indexOf('#'))
      }
}


// check if string has equal amounts of x's and o's, return boolean
// string can contain any character
function equalXO(str){
    str = str.toLowerCase().split('')
    return str.filter(lmt => lmt === 'x').length === str.filter(lmt => lmt === 'o').length
}


// find consecutive vowels - a e i o u - loop around as needed
// return number of conseutive vowels
function consecutiveVowels(str){
    let vowels = 'aeiou'
    let position = 0
    let counter = 0

    for(letter of str){
        if(letter == vowels[position]){
            counter++
            position = (position + 1) % vowels.length
        }
    }

    return counter
}


// given an integer n and two values
// return array of size n with two values alternating
function alternatingArray(n,val1,val2){
    let newArr = []
    for(let i = 0; i < n; i++){
        // target odd number index, fill with second value - populate rest with first value
        if(i % 2 != 0){
            newArr.push(val2)
        } else {
            newArr.push(val1)
        }
    }
    return newArr
}


// røverspråk (robbers language) - all consonants are duplicated with an o added between, vowels are left untouched
// not using regex for practice reasons
// consonants = BCDFGHJKLMNPQRSTVWXYZ
// return str converted to robbers language
function robbersCode(str){
    let consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    // checks for uppercase consonants, and adds O and duplicate
    return str.split('').map(x => consonants.includes(x) ? `${x}O${x}`
    : // checks for lowercase consonants, and adds o and duplicate
    consonants.toLowerCase().includes(x) ? `${x}o${x}`
    : // no changes to vowels
    x
    ).join('')
}


// given a sequence of different type of values, retrun an object with separate properties for each type
function separateTypes(input){
    let number = input.filter(x => typeof(x) == typeof(2))
    let string = input.filter(y => typeof(y) == typeof(''))
    let boolean = input.filter(z => typeof(z) == typeof(false))
  
    let object = {}
    if(number.length > 0) object.number = number
    if(string.length > 0) object.string = string
    if(boolean.length > 0) object.boolean = boolean
  
    return object
}


// given positive integer, remove last digit until left with number that is multiple of 3
// return n if already multiple of three, if no such number exists return null
function prevMultOfThree(n){
    while (n % 3 != 0) {
        n = n.toString().slice(0, -1)
    }
    return Number(n) || null
}


// given a number N, determine if sum of N consecutive numbers is odd or even
// return Odd if definitely odd, Even if definitely even, Either if it can be either
function oddEvenOrEither(n){
    return n % 2 !== 0 ? 'Either' :
    (n / 2) % 2 === 0 ? 'Even' :
    'Odd'
}


// given an integral number, determine if it's a square number
function isSquare(x){
    return Math.ceil(Math.sqrt(x)) === Math.floor(Math.sqrt(x))
    // OR: return Math.sqrt(x) % 1 === 0
}


// create class for Song, with parameters title & artist
// create function to calculate how many new listeners there are (given array of names, case insensitive)
class Song{
    constructor(title, artist){
        this.title = title
        this.artist = artist
        this.listeners = []
    }

    howMany(arr){  
        let count = 0
        arr.forEach(x => {
            if(!this.listeners.includes(x.toLowerCase())){
                this.listeners.push(x.toLowerCase())
                count++
            }
        })
        return count
    }
}


// find the next number with exactly two distinct digits
function doubleton(num){ 
    while (true){
        num++
        if(new Set(String(num)).size === 2) {
            return num
        }
    }
}


// return the top n elements from array
function topElements(n, arr){
    return arr.sort((a,b) => a - b).slice(arr.length -n)
}


// given positive integer, check if Harshad number, return true if sum and sum reversed equals given integer, otherwise return false
// example 1729: it's digit sum = 1 + 7 + 2 + 9 = 19; reverse sum = 91; 19 * 91 = 1729
// Harshad number is an integer divisible by the sum of its digits, ex 21: 2 + 1 = 3, 21 is divisible by 3
function numberJoy(num){
    let sum = num.toString().split('').map(Number).reduce(function(a,b) {return a + b}, 0)
    if(num % sum === 0){
        return sum * sum.toString().split('').reverse().join('') === num ? true : false
    } else {
        return false
    }
}


// Truncate given string, if it's longer than given maximum length - return string with '...' ending (remember these ADD to length of string)
// if given maximum length is less than or equal to 3, the three dots do not add to length
function truncateString(str, maxLength){
    if(str.length > maxLength){
        return maxLength <= 3
        ? str.slice(0, maxLength) + '...'
        : str.slice(0, maxLength - 3) + '...'
    } else {
        return str
    }
}


// given a positive integer n, return sum of all the cubed values from 1 to n
function sumCubes(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
      sum += Math.pow(i,3)
    }
    return sum
}


// count consonants in string (without regex (with regex use match))
function consonantCount(str){
    let count = str.toLowerCase().split('').filter(x => 'bcdfghjklmnpqrstvwxyz'.includes(x))
    return str.length != 0
        ? count.length
        : 0
}


// convert hash to array, and return it with keys alphabetically sorted
function hashToArr(hash){
    return Object.entries(hash).sort()

    /* let arr = []
    for(const [key, value] of Object.entries(hash)){ arr.push([key, value])}
    return arr.sort() */
}


// calculate number of people on the bus at the last stop
// given an array of integer pairs, representing people getting on and off the bus
function busPassengers(arr){
    return arr.reduce((acc, cur) =>  acc + (cur[0] - cur[1]),0)
}


// hamming distance: given two binary numbers, how many character substitutions are needed for them to match
function hammingDistance (a, b){
    let count = 0
    for(let i = 0; i < a.length; i++){
    if(a[i] != b[i]){
      count++}
  }
  return count
}


// calculate sum of integers in string, there may be other characters in the string, only positive integers
function sumIntegersString(str){
    return (str.match(/\d+/g) || []).reduce((acc,cur) => acc + +cur, 0)
}


// given a nested list, find the sum of the minimum values of each row
function sumMinVal(arr){
    return arr.reduce((acc,cur) => acc + Math.min(...cur), 0) 
}


// cat in the hat has cat a under its hat, which has cat b under it's hat. first cat is 2000000 cat units tall, each cat is 2.5 times bigger than the one in their hat
// given number of cats, return total height of cats if standing on top of eachother, fix to 3 decimal places
function catsInHats(num){
    let height = [2000000]
    while (i < num) {
        height.push(height / 2.5)
        i++
    }
    return (height.reduce((acc,cur) => acc + cur, 0)).toFixed(3)
}


// calculate total sum of internal angles of an n-sided simple polygon
function polygonAngles(num){
    return (num - 2) * 180
}


// given two integers, return sum of all integers between (including them), if equal return either number
// formula = (number of integers / 2) * (first number + last number)
function sumBetween(a, b){
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    return ((max - min + 1) / 2) * (min + max)
}


// figure out original price of item, given discounted price and sale percentage, limit to 2 decimals
function originalPrice(discountPrice, salePercentage){
    return discountPrice / (1 - salePercentage / 100).toFixed(2)
}


// check if given string ends with given ending
// return true if match, or if ending is empty string
function stringMatch(str, ending){
    return str.slice(- ending.length) === ending || ending.length === 0 ? true : false

    // better: return str.endsWith(ending)
}


// correct the given timestring
// if timestring is empty or null, return empty or null
// if correct format, return the correct numbers (24 hour clock)
function timeCorrect(timestring){
    let validTime = /^([0-9]{2}:[0-9]{2}:[0-9]{2})$/
    if(!validTime.test(timestring)) return null
    if(!timestring) return timestring

    return (new Date(0,0,0,...timestring.split(':')))
}


// with two consecutive integers (k1, k2), find lowest possible integer where k1 and k2 multiplied by n result in same digits in different order
// ex: k1 = 100, k2 = 101 -> n = 8919 (because 8919 * 100 = 891900 & 8919 * 101 = 900819)
function findLowestInt(k){
    let n = 1
    
    while(n < Number.MAX_SAFE_INTEGER){
        if((k * n).toString().split('').sort().join('') === ((k + 1) * n).toString().split('').sort().join('')){
            return n
        }
        n += 1
    }
}


// Math.min function stopped working, make a function that returns minimum value
// return NaN for anything that isn't a number, treat null like 0
function minNum(a,b){
    return (isNaN(a) || isNaN(b)) ? NaN : (a < b) ? +a : +b
}


// return complimentary DNA
function complimentaryDNA(str){
    let pairs = {'A':'T','T':'A','C':'G','G':'C'}
    return str.split('').map(function(x){ return pairs[x] }).join('')
}


// find the single unique value in the array
function uniqueNum(nums){
    for (let x in nums){
        if(nums.indexOf(nums[x]) === nums.lastIndexOf(nums[x])){
            return nums[x]
        }
    }
}


// check if word is isogram (no repeating letters)
function isogramCheck(str){
    return new Set(str.toLowerCase()).size == str.length
}


// capitalise each word in the sentence
function capitaliseAllWords(str){
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}


// given array of positive numbers, return sum of two smallest values
function twoSmallNums(arr){
    arr.sort((a,b) => a - b)
    return arr[0] + arr[1]
}


// given two strings, return the longest possible string (sorted) with distinct letters from the two strings
function longest(s1, s2) {
    let result = new Set(s1 + s2)
    return Array.from(result).sort().join('')

    // ALT 1: return [...new Set(s1 + s2)].sort().join('')
    // ALT 2: return Array.from(new Set(s1 + s2)).sort().join('')
}


// given array of names, return only names with 4 letters
function names(arr){
    return arr.filter(word => word.length === 4)
}


// given array with persons age and handicap, return array of croquet membership they qualify for
// senior: over 55 years old, handicap over 7, else: open
function openOrSenior(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] >= 55 && arr[i][1] > 7){
            return 'Senior'
        } else {
            return 'Open'
        }
    }

    // BETTER:
    return arr.map(([age,handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')
}
