// Fungsi untuk menghitung luas persegi, dengan pemeriksaan tipe parameter
function calculateSquareArea(sideLength) {
  if (typeof sideLength !== "number") {
    throw new Error('Parameter "sideLength" harus berupa angka.');
  }
  return sideLength * sideLength;
}

// Fungsi untuk menghitung keliling persegi, dengan pemeriksaan tipe parameter
function calculateSquarePerimeter(sideLength) {
  if (typeof sideLength !== "number") {
    throw new Error('Parameter "sideLength" harus berupa angka.');
  }
  return 4 * sideLength;
}

// Fungsi utama untuk menampilkan hasil perhitungan
function main() {
  var side = 5; // Panjang sisi persegi yang valid

  try {
    var area = calculateSquareArea(side); // Panggil fungsi untuk menghitung luas
    var perimeter = calculateSquarePerimeter(side); // Panggil fungsi untuk menghitung keliling

    console.log("Panjang sisi persegi: " + side);
    console.log("Luas persegi: " + area);
    console.log("Keliling persegi: " + perimeter);
  } catch (error) {
    console.error(error.message);
  }

  // Contoh dengan parameter tidak valid
  var invalidSide = "lima"; // Panjang sisi yang tidak valid

  try {
    var invalidArea = calculateSquareArea(invalidSide); // Akan menghasilkan error
  } catch (error) {
    console.error("Kesalahan menghitung luas: " + error.message);
  }

  try {
    var invalidPerimeter = calculateSquarePerimeter(invalidSide); // Akan menghasilkan error
  } catch (error) {
    console.error("Kesalahan menghitung keliling: " + error.message);
  }
}

// Panggil fungsi utama
main();
