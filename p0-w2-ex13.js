function xo(str) {
    var penampungX = 0
    var penampungO = 0
    for( var i = 0; i < str.length; i++) {
        if(str[i] === 'x') {
            penampungX += 1
        }
        else {
            penampungO += 1
        }
    }
    if(penampungX === penampungO) {
        return true
    }
    else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  console.log(xo('xxxxo'))
  console.log(xo('xoooo'))
  console.log(xo('xo'))