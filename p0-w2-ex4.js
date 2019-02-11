var tanggal = 17
var bulan = 2
var tahun = 2025
var strTanggal = String(tanggal)
var strTahun = String(tahun)
switch(bulan) {
    case 1: {console.log(strTanggal + ' ' + 'Januari' + ' ' + strTahun); break;}
    case 2: {console.log(strTanggal + ' ' + 'Februari' + ' ' + strTahun); break;}
    case 3: {console.log(strTanggal + ' ' + 'Maret' + ' ' + strTahun); break;}
    case 4: {console.log(strTanggal + ' ' + 'April' + ' ' + strTahun); break;}
    case 5: {console.log(strTanggal + ' ' + 'Mei' + ' ' + strTahun); break;}
    case 6: {console.log(strTanggal + ' ' + 'Juni' + ' ' + strTahun); break;}
    case 7: {console.log(strTanggal + ' ' + 'Juli' + ' ' + strTahun); break;}
    case 8: {console.log(strTanggal + ' ' + 'Agustus' + ' ' + strTahun); break;}
    case 9: {console.log(strTanggal + ' ' + 'September' + ' ' + strTahun); break;}
    case 10: {console.log(strTanggal + ' ' + 'Oktober' + ' ' + strTahun); break;}
    case 11: {console.log(strTanggal + ' ' + 'November' + ' ' + strTahun); break;}
    case 12: {console.log(strTanggal + ' ' + 'Desember' + ' ' + strTahun); break;}
    default: {console.log('Zonk');}
}