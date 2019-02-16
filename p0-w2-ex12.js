function konversiMenit(menit) {
    /*
    menit = 63
    menit dibagi 60= 1 lalu hasilnya dibuletin ke bawah INI JAMNYA
    menit modulo 60 = 3 INI MENITNYA
    jamnya diubah ke string terus tambah :
    menitnya diubah kestring trus tambah nol di depannya pake slice -2 biar ga numpung jadi 3 angka
    */
   var jamAngka = Math.floor(menit / 60)
   var menitAngka = menit % 60
   var jamString = jamAngka.toString() + ':'
   var menitString = ('0' + menitAngka).slice(-2)
   var result = jamString + menitString

   return result


}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  console.log(konversiMenit(1000))