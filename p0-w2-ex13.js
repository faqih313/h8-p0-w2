function xo(str) {
    var tempX=0
    var tempO=0
    for(var i=0; i<str.length; i++) {
        if(str[i] == "x") {
            tempX+=1
        } else {
            tempO+=1
        }
    }
    if(tempX==tempO) {
        return true
    } else {
        return false
    }
  }
  
//   TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true