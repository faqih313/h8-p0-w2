//NOMOR 1
var i = 2
console.log('LOOPING PERTAMA')
while(i <= 20) {
    console.log(i + ' - I love coding')
    i += 2
}

var i2 = 20
console.log('LOOPING KEDUA')
while(i2 >= 2) {
    console.log(i2 + ' - I will become fullstack developer')
    i2 -= 2
}

//NOMOR 2
console.log('LOOPING PERTAMA NOMOR 2')
for(var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding')
}

console.log('LOOPING KEDUA NOMOR 2')
for(var i = 20; i >=1; i--) {
     console.log(i + ' - I will become fullstack developer')
}

//NOMOR 3
console.log('CASE PERTAMA NOMOR 3')
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log('"GENAP"')
    } else {
      console.log('"GANJIL"')
    }
  }

console.log('CASE KEDUA NOMOR 3')
for (var i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log('"3 KELIPATAN 3"')
  } else {
    console.log('""')
  }
}

for (var i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log('"6 KELIPATAN 6"')
  } else {
    console.log('""')
  }
}

  for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
      console.log('"10 KELIPATAN 10"')
    } else {
      console.log('""')
    }
  }