class person{
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }

    eat(){
        console.log(`${this.nama} sedang makan cuyy`)
    }
}

const person1 = new person('waqqir', 17);
const person2 = new person("fulan", 13);

console.log(person1.nama);
console.log(person2.nama);

person1.eat();
person2.eat();