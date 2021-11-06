/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    let digitArray = (n + "").split('');
    let divisors = [];
    
    for(let i = 0; i < digitArray.length; i++){
      let num = digitArray[i]*1;
      
      if(n % num == 0){
        divisors.push(num)
      }
    }
    
    return divisors.length;
  }
  