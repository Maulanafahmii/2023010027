function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Block Statement untuk memeriksa bilangan prima
  {
    let isPrime = true;

    // Loop untuk memeriksa faktor-faktor dari 2 hingga sqrt(number)
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }
}

// Menguji fungsi dengan beberapa contoh
console.log(isPrime(2)); // Output: true
console.log(isPrime(3)); // Output:
