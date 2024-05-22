// Fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
  // Menghitung luas dengan rumus panjang * lebar
  let luas = panjang * lebar;
  // Mengembalikan hasil perhitungan
  return luas;
}

// Menggunakan fungsi hitungLuasPersegiPanjang
let panjang = 5;
let lebar = 10;

// Memanggil fungsi dan menyimpan hasilnya dalam variabel
let luas = hitungLuasPersegiPanjang(panjang, lebar);

// Mencetak hasil perhitungan ke konsol
console.log("Luas persegi panjang adalah: " + luas);
