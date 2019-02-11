function konversiMenit(menit) {
    var tampung = ''
    if( menit < 60 ) {
        tampung += '0:' + ('0' + menit).slice(-2)
        return tampung
    }
    else if( menit < 120) {
        tampung += '1:' + ('0' + (menit - 60)).slice(-2)
        return tampung
    }
    else {
        tampung += '2:' + ('0' + (menit - 120)).slice(-2)
        return tampung
    }
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
