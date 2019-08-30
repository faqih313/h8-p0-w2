var tanggal = 31
var bulan = 12
var tahun = 2200
var strTanggal = String(tanggal)
var strTahun = String(tahun)
if(tanggal<1 || tanggal>31) {
    console.log('Input tanggal tidak sesuai!')
} else if (bulan<1 || bulan>12) {
    console.log('Input bulan tidak sesuai!')
} else if(tahun<1900 || tahun>2200) {
    console.log('Input tahun tidak sesuai!')
} else {
    switch(bulan) {
        case 1: {bulan='Januari'; break;}
        case 2: {bulan='Februari'; break;}
        case 3: {bulan='Maret'; break;}
        case 4: {bulan='April'; break;}
        case 5: {bulan='Mei'; break;}
        case 6: {bulan='Juni'; break;}
        case 7: {bulan='Juli'; break;}
        case 8: {bulan='Agustus'; break;}
        case 9: {bulan='September'; break;}
        case 10: {bulan='Oktober'; break;}
        case 11: {bulan='November'; break;}
        case 12: {bulan='Desember'; break;}
    }
    console.log(strTanggal,bulan,strTahun)
}