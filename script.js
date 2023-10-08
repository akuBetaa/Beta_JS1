//1. Penggunaan 'if', 'if else', 'nested if' variabel usia pengunjung

let usiaPengunjung = 15; 

const usiaMinimum = 18; //Usia minimum untuk menonton film tertentu.

if (usiaPengunjung >= usiaMinimum) {
    console.log("Anda boleh menonton film ini.");
} else {
    console.log("Maaf, Anda belum cukup usia untuk menonton film ini.");
}


// 2. Penggunaan 'switch case' dengan variabel kodeProduk

let kodeProduk = "A01";

let kategoriProduk;

switch (kodeProduk.charAt(0)) {
    case "A":
        kategoriProduk = "Elektronik";
        break;
    case "B":
        kategoriProduk = "Pakaian";
        break;
    case "C":
        kategoriProduk = "Makanan";
        break
    default:
        kategoriProduk = "Kategori tidak dikenal";
}

console.log(`Kode produk ${kodeProduk} termasuk dalam kategori ${kategoriProduk}.`);

//3. Penggunaan 'for statement' dengan variabel

let nama = "Beta";

for (let i = 0; i < 3; i++) {
    console.log("Selamat datang, " + nama + "! Semangat mengerjakan menulis kode!");
}

//4. Penggunaan 'while' dengan variabel tugasSaatIni

let totalTugas = 5;
let tugasSaatIni = 1;

while (tugasSaatIni <= totalTugas) {
    console.log("Ayo Beta kerjakan tugas " + tugasSaatIni + ": Kerjakan tugas terkait.");
    tugasSaatIni++;
}

//5. Penggunaan 'do while' dengan variabel


//6. Penggunaan 'function' dengan variabel
