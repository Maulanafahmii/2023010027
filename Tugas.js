// Daftar barang yang dijual di toko handphone beserta harganya
const daftarBarang = [
  { nama: "iPhone 12", harga: 15000000 },
  { nama: "Samsung Galaxy S21", harga: 13000000 },
  { nama: "Asus ROG Pone 8 Pro", harga: 19000000 },
  { nama: "Xiami Mi 11", harga: 11000000 },
];

// Fungsi untuk menjumlahkan total harga barang yang dibeli
function totalBelanja(barangDibeli) {
  let total = 0;
  for (let barang of barangDibeli) {
    total += barang.harga;
  }
  return total;
}

// Fungsi untuk menghitung harga dengan diskon 10% untuk member
function hitungHargaSetelahDiskon(total, isMember) {
  if (isMember) {
    return total * 0.9; // Diskon 10% untuk member
  } else {
    return total;
  }
}

// Fungsi untuk menampilkan struk belanja
function tampilkanStruk(barangDibeli, total, isMember) {
  console.log("==== Struk Belanja ====");
  console.log("Barang yang dibeli:");
  for (let barang of barangDibeli) {
    console.log(`${barang.nama}: Rp${barang.harga}`);
  }
  console.log("----------------------");
  console.log(`Total harga: Rp${total}`);
  if (isMember) {
    console.log("Anda mendapatkan diskon 10% sebagai member.");
    console.log(
      `Total harga setelah diskon: Rp${hitungHargaSetelahDiskon(
        total,
        isMember
      )}`
    );
  }
  console.log("Terima kasih telah berbelanja di Toko Handphone Fahmi!");
}

// Contoh pembelian barang oleh customer
const barangDibeli = [daftarBarang[0], daftarBarang[2]]; // Membeli iPhone 12 dan Xiaomi Mi 11
const totalHarga = totalBelanja(barangDibeli);
const isMember = true; // Ganti menjadi true jika customer adalah member

// Menampilkan struk belanja
tampilkanStruk(barangDibeli, totalHarga, isMember);
