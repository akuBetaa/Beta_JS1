//1. Penggunaan 'if', 'if else', 'nested if' 

let usiaPengunjung = 15; 

const usiaMinimum = 18; //Usia minimum untuk menonton film tertentu.

if (usiaPengunjung >= usiaMinimum) {
    console.log("Anda boleh menonton film ini.");
} else {
    console.log("Maaf, Anda belum cukup usia untuk menonton film ini.");
}


// 2. Penggunaan 'switch case' 

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

//3. Penggunaan 'for statement' 

let nama = "Beta";

for (let i = 0; i < 3; i++) {
    console.log("Selamat datang, " + nama + "! Semangat mengerjakan menulis kode!");
}

//4. Penggunaan 'while' 

let totalTugas = 5;
let tugasSaatIni = 1;

while (tugasSaatIni <= totalTugas) {
    console.log("Ayo Beta kerjakan tugas " + tugasSaatIni + ": Kerjakan tugas terkait.");
    tugasSaatIni++;
}

//5. Penggunaan 'do while'

let mainan = "Lego";
let count = 0;

do {
  console.log("Saya memiliki " + mainan + " di rumah.");
  count++;
} while (count < 5);

//6. Penggunaan 'function'

function tampilkanJurusan(namaJurusan) {
    console.log("Saya Beta dengan Jurusan " + namaJurusan + ".");
}
  
let namaJurusan = "Teknik Informatika";
tampilkanJurusan(namaJurusan);