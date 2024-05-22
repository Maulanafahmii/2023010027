// Definisikan sebuah fungsi sederhana untuk menghitung luas persegi
function calculateSquareArea(sideLength) {
  var area = sideLength * sideLength; // Menghitung luas persegi
  return area;
}

// Definisikan sebuah fungsi sederhana untuk menghitung keliling persegi
function calculateSquarePerimeter(sideLength) {
  var perimeter = 4 * sideLength; // Menghitung keliling persegi
  return perimeter;
}

// Fungsi utama untuk menampilkan hasil perhitungan
function main() {
  var side = 5; // Panjang sisi persegi

  var area = calculateSquareArea(side); // Panggil fungsi untuk menghitung luas
  var perimeter = calculateSquarePerimeter(side); // Panggil fungsi untuk menghitung keliling

  console.log("Panjang sisi persegi: " + side);
  console.log("Luas persegi: " + area);
  console.log("Keliling persegi: " + perimeter);
}

// Panggil fungsi utama
main();
