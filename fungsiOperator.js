function tambah(a, b){
    const hasil = a + b
    return hasil;
}
function kurang(a, b) {
    const hasil = a - b;
    return hasil;
}
function bagi(a, b) {
    const hasil = a / b;
    return hasil;
}
function kali(a, b) {
    const hasil = a * b;
    return hasil;
}

const hasilKali = kali(1,2)
const hasilKurang = kurang(1, 2);
const hasilBagi = bagi(1, 2);
const hasilTambah = kali(1, 2);

console.log(`Hasil Kali  : `, hasilKali );
console.log(`Hasil kurang  : `, hasilKurang);
console.log(`Hasil bagi  : `, hasilKali);
console.log(`Hasil tambah  : `, hasilTambah);