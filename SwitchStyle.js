// Nilai siswa
let nilai = 91;

// Menggunakan switch untuk menentukan grade
let grade;
switch (true) {
  case nilai >= 90:
    grade = "A";
    break;
  case nilai >= 80:
    grade = "B";
    break;
  case nilai >= 70:
    grade = "C";
    break;
  case nilai >= 60:
    grade = "D";
    break;
  default:
    grade = "E";
}

// Menampilkan grade
console.log("Grade Anda: " + grade);
