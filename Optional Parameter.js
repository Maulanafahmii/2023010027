// Fungsi untuk menghitung luas persegi dengan parameter opsional
function calculateSquareArea(sideLength = 1) {
  return sideLength * sideLength;
}

// Fungsi untuk menghitung keliling persegi dengan parameter opsional
function calculateSquarePerimeter(sideLength = 1) {
  return 4 * sideLength;
}

// Fungsi utama untuk menampilkan hasil perhitungan
function main() {
  // Contoh dengan parameter yang diberikan
  console.log("Luas persegi (side = 5): " + calculateSquareArea(5));
  console.log("Keliling persegi (side = 5): " + calculateSquarePerimeter(5));

  // Contoh dengan parameter opsional (tidak diberikan)
  console.log("Luas persegi (default): " + calculateSquareArea());
  console.log("Keliling persegi (default): " + calculateSquarePerimeter());
}

// Panggil fungsi utama
main();
