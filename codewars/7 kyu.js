// *** CODEWARS (7 KYU) ***

// square every number
function squareDigits(num) {
    let numArr = num.toString().split('').map(x => Math.pow(x, 2)).join('')
    return parseFloat(numArr)
}