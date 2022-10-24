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
