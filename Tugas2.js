// Fungsi untuk menghitung luas lingkaran menggunakan Math.PI
function calculateCircleArea(radius) {
  if (typeof radius !== "number" || radius <= 0) {
    throw new Error('Parameter "radius" harus berupa angka positif.');
  }
  return Math.PI * Math.pow(radius, 2);
}

// Fungsi untuk mendapatkan tanggal dan waktu saat ini menggunakan Date
function getCurrentDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return now.toLocaleDateString("id-ID", options);
}

// Fungsi untuk memformat string: membuat huruf pertama menjadi huruf besar
function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.length === 0) {
    throw new Error(
      'Parameter "string" harus berupa string yang tidak kosong.'
    );
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Fungsi utama untuk menampilkan hasil
function main() {
  try {
    // Menghitung luas lingkaran
    const radius = 5;
    const area = calculateCircleArea(radius);
    console.log(
      `Luas lingkaran dengan jari-jari ${radius} adalah: ${area.toFixed(2)}`
    );

    // Mendapatkan tanggal dan waktu saat ini
    const currentDateTime = getCurrentDateTime();
    console.log(`Tanggal dan waktu saat ini: ${currentDateTime}`);

    // Memformat string
    const inputString = "hello world";
    const formattedString = capitalizeFirstLetter(inputString);
    console.log(
      `String asli: "${inputString}", setelah diformat: "${formattedString}"`
    );
  } catch (error) {
    console.error(error.message);
  }
}

// Panggil fungsi utama
main();
