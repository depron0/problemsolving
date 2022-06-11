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