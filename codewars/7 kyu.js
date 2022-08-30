// *** CODEWARS (7 KYU) ***

// square every number
function squareDigits(num) {
    let numArr = num.toString().split('').map(x => Math.pow(x, 2)).join('')
    return parseFloat(numArr)
}


// given a string of space separated numbers, return the highest and lowest number
function highAndLow(nums) {
    // convert to array, convert to integer, sort high to low
    let a = nums.split(' ').map(x => parseFloat(x)).sort((a,b) => b-a)
    // create array with highest and lowest value, then join together
    let b = [a[0], a[a.length -1]].join(' ')
    return b
}


// check that all values in the array are below or equal to the limit value, return true or false
function underLimit(arr, limit) {
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
    if (str.length % 2 != 0) {
    middle = str.substr(str.length / 2, 1)
    } 
    if (str.length % 2 === 0){
    middle = str.substr((str.length / 2) - 1, 2)
    } 
    return middle
}


// return new array with strings filtered out
function filterList(arr) {
    return arr.filter(element => typeof(element) === 'number')
}


// return number of vowels in the string (all lowercase, if not: add uppercase variants to vowel array, OR make string lowercase before filter)
function numVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let filtered = str.split('').filter(x => vowels.includes(x))
    return filtered.length
}