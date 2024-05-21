// Fungsi untuk menghitung luas persegi panjang dengan parameter default
function calculateRectangleArea(length = 1, width = 1) {
  return length * width;
}

// Fungsi untuk menghitung keliling persegi panjang dengan parameter default
function calculateRectanglePerimeter(length = 1, width = 1) {
  return 2 * (length + width);
}

// Fungsi utama untuk menampilkan hasil perhitungan
function main() {
  // Contoh dengan parameter yang diberikan
  console.log("Persegi Panjang (length = 5, width = 3):");
  console.log("  Luas: " + calculateRectangleArea(5, 3));
  console.log("  Keliling: " + calculateRectanglePerimeter(5, 3));

  // Contoh dengan parameter default (tidak diberikan)
  console.log("\nPersegi Panjang (default):");
  console.log("  Luas: " + calculateRectangleArea());
  console.log("  Keliling: " + calculateRectanglePerimeter());
}

// Panggil fungsi utama
main();
