// Contoh penggunaan first-class functions

// Fungsi yang mengembalikan salam
function greet() {
  return "Halo, selamat pagi!";
}

// Fungsi yang menerima fungsi lain sebagai argumen
function sayHello(greetingFunction) {
  const greeting = greetingFunction(); // Memanggil fungsi yang diterima
  console.log(greeting);
}

// Fungsi yang mengembalikan fungsi lain
function createGreeting(language) {
  if (language === "en") {
    return function () {
      return "Hello, good morning!";
    };
  } else if (language === "id") {
    return function () {
      return "Halo, selamat pagi!";
    };
  } else {
    return function () {
      return "Language not supported!";
    };
  }
}

// Penggunaan fungsi yang mengembalikan fungsi lain
const greetingInEnglish = createGreeting("en");
const greetingInIndonesian = createGreeting("id");

// Memanggil fungsi sayHello dengan fungsi sebagai argumen
sayHello(greet);
sayHello(greetingInEnglish);
sayHello(greetingInIndonesian);
