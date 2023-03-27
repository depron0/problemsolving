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