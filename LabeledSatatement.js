// Inisialisasi array dua dimensi
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Angka yang ingin dicari
const target = 5;

// Menggunakan pernyataan berlabel untuk loop luar
outerLoop: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === target) {
      console.log(
        "Angka " + target + " ditemukan pada baris " + i + ", kolom " + j
      );
      // Menghentikan loop luar menggunakan break dengan label
      break outerLoop;
    }
  }
}
