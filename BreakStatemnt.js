// Inisialisasi array dengan beberapa angka
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Menggunakan pernyataan for untuk menjelajahi setiap angka dalam array
for (let i = 0; i < numbers.length; i++) {
  // Cek apakah angka lebih besar dari 5
  if (numbers[i] > 5) {
    console.log("Angka pertama yang lebih besar dari 5 adalah: " + numbers[i]);
    // Menghentikan loop menggunakan break
    break;
  }
}
