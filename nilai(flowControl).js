function CekPredikat(nilai){
    for (let i = 0; i < nilai.length; i++) {
        if (typeof nilai[i] != 'number' ) {
                throw new Error("Erorr: Data harus berupa number");
        }

        const kelas = nilai[i];
        let predikat;
        
        if (kelas >= 90) {
          predikat = "A";
        } else if (kelas >= 80) {
          predikat = "B";
        } else if (kelas >= 70) {
          predikat = "C";
        } else if (kelas >= 60) {
          predikat = "D";
        } else {
          predikat = "E";
        }

        console.log(`Grade ${i + 1}: ${kelas} (${predikat})`);
    }
}


try {
    const nilai = [80,20,10,60,90];
    CekPredikat(nilai);
} catch (e) {
    console.error(e)
}
