// Fungsi untuk menghitung jumlah dari sejumlah angka
function sum(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Fungsi utama untuk menampilkan hasil perhitungan
function main() {
  // Contoh dengan beberapa angka
  console.log("Jumlah (1, 2, 3, 4, 5): " + sum(1, 2, 3, 4, 5));
  console.log("Jumlah (10, 20, 30): " + sum(10, 20, 30));
  console.log("Jumlah (5): " + sum(5));
  console.log("Jumlah (tanpa argumen): " + sum()); // Menggunakan tanpa argumen
}

// Panggil fungsi utama
main();
