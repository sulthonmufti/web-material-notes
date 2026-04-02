/**
 * PRACTICE: DOM Elements & HTML
 * Isi function di bawah menggunakan:
 * - document.createElement()
 * - parent.appendChild()
 * - element.remove()
 * - getAttribute() / setAttribute()
 */

// ========== 1. LIST DINAMIS (createElement + appendChild + innerText) ==========
let counterItem = 1;

function tambahItemList() {
  // TODO:
  // 1. Seleksi <ul> dengan id "practice-list"
  // 2. Buat elemen <li> baru dengan document.createElement("li")
  // 3. Isi teks: "Item ke-[counterItem]"
  // 4. appendChild ke ul
  // 5. Naikkan nilai counterItem

  const container = document.getElementById("practice-list");

  const li = document.createElement("li");
  li.innerText = "Item ke-" + counterItem;

  container.appendChild(li);
  counterItem++;
}

function hapusSemuaItem() {
  // TODO:
  // Kosongkan semua anak dari #practice-list
  // (boleh pakai innerHTML = "" atau loop removeChild)

  const container = document.getElementById("practice-list");
  counterItem = 1;
  container.innerHTML = "";
}

// ========== 2. DISMISSIBLE ALERT (remove) ==========
function tutupAlert() {
  // TODO:
  // 1. Seleksi elemen dengan id "alert-latihan"
  // 2. Panggil .remove() agar alert hilang dari halaman

  const deleteAlert = document.getElementById("alert-latihan");
  if (deleteAlert) {
    deleteAlert.remove();
    alert("Data dihapus dari sistem!");
  }
}

// ========== 3. TOGGLE PASSWORD (getAttribute + setAttribute) ==========
function togglePasswordPractice() {
  // TODO:
  // 1. Seleksi input dengan id "password-practice"
  // 2. Ambil atribut "type" sekarang dengan getAttribute("type")
  // 3. Jika "password" -> ubah ke "text" dengan setAttribute
  //    Jika selain itu -> ubah kembali ke "password"
  const pass = document.getElementById("password-practice");
  const type = pass.getAttribute("type");
  if (type === "password") {
    pass.setAttribute("type", "text");
  } else {
    pass.setAttribute("type", "password");
  }
}

// ========== 4. GANTI GAMBAR (setAttribute) ==========
function gantiGambar(mode) {
  // TODO:
  // 1. Seleksi <img> dengan id "gambar-preview"
  // 2. Jika mode === "siang": setAttribute src ke URL gambar siang, alt ke teks yang sesuai
  //    Jika mode === "malam": setAttribute src ke URL gambar malam, alt ke teks yang sesuai
  //    (boleh pakai gambar placeholder dari via.placeholder.com seperti di HTML bawaan)

  const image = document.getElementById("gambar-preview");
  if (mode === "siang") {
    image.setAttribute("src", "https://share.google/WXRL2Qj4ej3JHHliB");
    image.setAttribute("alt", "Gambar Siang");
  } else {
    image.setAttribute("src", "https://share.google/5XeGN2xR2oHECgSGH");
    image.setAttribute("alt", "Gambar Malam");
  }
}
