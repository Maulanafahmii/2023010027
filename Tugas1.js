// Fungsi untuk mengelompokkan umur
function categorizeAge(age) {
  if (age < 13) {
    return "Anak-anak";
  } else if (age >= 13 && age < 20) {
    return "Remaja";
  } else if (age >= 20 && age < 60) {
    return "Dewasa";
  } else {
    return "Lansia";
  }
}

// Contoh penggunaan
const age = 11;
const category = categorizeAge(age);

console.log(`Umur ${age} termasuk kategori: ${category}`);
document.write(`<h3>Umur ${age} termasuk kategori: ${category}</h3>`);
