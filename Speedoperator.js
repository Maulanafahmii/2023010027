function displayFruits(...fruits) {
  console.log("Daftar buah-buahan:");
  for (let fruit of fruits) {
    console.log(fruit);
  }
}
let fruits = ["Apple", "Banana", "Mango"];
displayFruits(...fruits);
