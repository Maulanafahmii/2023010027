// Membuat angka acak antara 1 dan 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
  // Meminta pengguna untuk memasukkan tebakan
  guess = parseInt(prompt("Tebak angka antara 1 dan 100:"));

  // Memeriksa apakah tebakan kurang dari atau lebih besar dari angka target
  if (guess < targetNumber) {
    console.log("Tebakan Anda terlalu rendah. Coba lagi.");
  } else if (guess > targetNumber) {
    console.log("Tebakan Anda terlalu tinggi. Coba lagi.");
  }
} while (guess !== targetNumber);

console.log("Selamat! Anda telah menebak angka yang benar: " + targetNumber);
