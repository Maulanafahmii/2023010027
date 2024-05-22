// Function Expression untuk menghitung faktorial
const factorial = function (n) {
  // Jika n adalah 0 atau 1, faktorialnya adalah 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Rekursif panggil fungsi factorial untuk menghitung faktorial
  return n * factorial(n - 1);
};

// Contoh penggunaan Function Expression untuk menghitung faktorial dari 5
let number = 5;
let result = factorial(number);
console.log(`Faktorial dari ${number} adalah ${result}`);
