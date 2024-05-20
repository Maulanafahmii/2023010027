const biodata = {
  nama: "Maulana Fahmi",
  umur: 18,
  alamat: "Kudus",
  kontak: "085712432595",
};
const prodi = {
  namaProdi: "Rekayasa Perangkat Lunak",
  universitas: "Politeknik Balekambang",
  angkatan: 2023,
};
function tampilkanProfil() {
  console.log("=== Profil ===");
  console.log(`Nama: ${biodata.nama}`);
  console.log(`Umur: ${biodata.umur}`);
  console.log(`Alamat: ${biodata.alamat}`);
  console.log(`Kontak: ${biodata.kontak}`);
  console.log("\n=== Program Studi ===");
  console.log(`Program Studi: ${prodi.namaProdi}`);
  console.log(`Universitas: ${prodi.universitas}`);
  console.log(`Angkatan: ${prodi.angkatan}`);
}
tampilkanProfil();
