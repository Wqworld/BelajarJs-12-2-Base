const siswa = { nama: "waqqir",
                kelas: "XII-RPL 2",
                'jurusan siswa' : 'Rekayasa perangkat lunak',
                umur : 17
              };

console.log(siswa.kelas);
console.log(siswa['jurusan siswa']);

const {umur, nama} = siswa;

console.log(umur, nama);

// const users = new Array("azzam", "waqir", "rian");
const users = ["azzam", "waqir", "rian"];
const daftarUser = Array.from(users);
console.log(daftarUser); 
console.log(users[0])

const yuhu = Array.from("waqqir");
console.log(yuhu);