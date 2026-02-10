function toggleSegment(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
  const span = element.querySelector("span");
  span.innerText = parent.classList.contains("active") ? "-" : "+";
}

// Demo Segmen 2
let listBuah = ["Apel", "Jeruk", "Mangga"];
function aksesArray() {
  document.getElementById("hasil-aksi").innerText =
    "Data yang diambil: " + listBuah[1];
}
function ubahArray() {
  listBuah[0] = "Melon";
  document.getElementById("tampil-buah").innerText =
    'Daftar Buah: ["Melon", "Jeruk", "Mangga"]';
  document.getElementById("hasil-aksi").innerText =
    "Index [0] berhasil diubah!";
}

// Demo Segmen 3
let daftarNama = ["Ali", "Budi"];
function updateList() {
  document.getElementById("list-nama").innerText = JSON.stringify(daftarNama);
}
function tambahData() {
  const n = document.getElementById("input-nama").value;
  if (n) {
    daftarNama.push(n);
    updateList();
    document.getElementById("input-nama").value = "";
  }
}
function hapusData() {
  daftarNama.pop();
  updateList();
}
