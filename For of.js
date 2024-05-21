// Inisialisasi array dengan beberapa angka
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inisialisasi variabel untuk menyimpan jumlah total
let total = 0;

// Menggunakan pernyataan for...of untuk menjelajahi setiap angka dalam array
for (const num of numbers) {
  total += num;
}

// Menampilkan hasil
console.log("Jumlah total dari angka dalam array adalah: " + total);
