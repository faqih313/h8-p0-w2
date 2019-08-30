//NOMOR 1
var angka = 2

console.log('LOOPING PERTAMA NOMOR 1')
while (angka<19) {
    console.log(String(angka),'- I love coding')
    angka+=2
}
console.log(String(angka),'- I love coding')

console.log('LOOPING KEDUA NOMOR 2')
while (angka>1) {
    console.log(String(angka),'- I will become fullstack developer')
    angka-=2
}

//NOMOR 2
console.log('LOOPING PERTAMA NOMOR 2')
for(var angka=1; angka<21; angka++) {
    console.log(String(angka),'- I love coding')
}

console.log('LOOPING KEDUA NOMOR 2')
for(angka--; angka>0; angka--) {
     console.log(String(angka),'- I will become fullstack developer')
}

//NOMOR 3
console.log('CASE PERTAMA NOMOR 3')
for (var i=1; i<101; i++) {
    if (i%2===0) {
      console.log('GENAP')
    } else {
      console.log('GANJIL')
    }
  }

console.log('CASE KEDUA NOMOR 3')
for (var i=1; i<101; i+=2) {
  if (i%3 === 0) {
    console.log(String(i),'KELIPATAN 3')
  } else {
    console.log('')
  }
}

console.log('CASE KETIGA NOMOR 3')
for (var i=1; i<101; i+=5) {
  if (i%6 === 0) {
    console.log(String(i),'KELIPATAN 6')
  } else {
    console.log('')
  }
}

console.log('CASE KEEMPAT NOMOR 3')
for (var i=1; i<101; i+=9) {
  if (i%10 === 0) {
    console.log(String(i),'KELIPATAN 10')
  } else {
    console.log('')
  }
}