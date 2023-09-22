// sum all multiples of 3 or 5 below given number (not inclusive)
// if given negative number, return 0
function sumMultiples(num){
  if(num > 0) {
    numArr = Array.from({length: num - 1}, (_, index) => index + 1)
    return numArr.filter(x => x % 3 == 0 || x % 5 == 0).reduce((acc,cur) => acc + cur, 0)
  } else {
    return 0
  }
}


// find the integer that occurs an odd amount of times
function findOddInt(arr){
  return arr.find(item => arr.filter(el => el == item).length % 2)
}


// given array containing names of people who liked the post, return text to show who liked it
function likes(names){
  switch (names.length){
    case 0:
        return `no one likes this`
        break;  
    case 1:
        return `${names[0]} likes this`
        break;
      case 2:
        return `${names[0]} and ${names[1]} like this`
        break;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        break;
      default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
        break;    
  }
}


// given array of numbers, return it in phone number format (000) 000-0000
function phoneNumber(numbers){
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
}