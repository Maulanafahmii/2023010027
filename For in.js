// Inisialisasi objek dengan beberapa pasangan kunci-nilai
const student = {
  nama: "Maulana Fahmi",
  Umur: 18,
  Prodi: "Rekayasa Perangkat Lunak",
  universitas: "Politeknik Balekambang",
};

// Menggunakan pernyataan for...in untuk menjelajahi setiap kunci dalam objek
for (const key in student) {
  // Menampilkan kunci dan nilai dari objek
  console.log(key + ": " + student[key]);
}
