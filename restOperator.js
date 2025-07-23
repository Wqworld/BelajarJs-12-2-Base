const makanan = ["mie ayam", "bakso", "naugget", "uras"];
 
const [first, kedua, ...listMakanan] = makanan;

console.log(first);
console.log(kedua);
console.log(listMakanan);

let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
}