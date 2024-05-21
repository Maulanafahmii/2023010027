// Menggunakan pernyataan for untuk menjelajahi angka dari 1 sampai 10
for (let i = 1; i <= 20; i++) {
  // Cek apakah angka adalah genap
  if (i % 2 === 0) {
    // Lewati iterasi ini jika angka adalah genap
    continue;
  }
  // Cetak angka ganjil
  console.log(i);
}
