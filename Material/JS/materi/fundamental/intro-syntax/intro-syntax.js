// Penjelasan: Fungsi ini mengubah isi HTML berdasarkan ID elemen
function ubahTeks() {
    document.getElementById("teks-demo").innerHTML = "Sintaks JS Berhasil Dijalankan!";
    document.getElementById("teks-demo").style.color = "#27ae60";
}

// Penjelasan: Menampilkan pesan di tab Console (F12)
function cekConsole() {
    console.log("Halo! Kamu baru saja mencoba console.log().");
    alert("Pesan sudah dikirim ke Console (F12)");
}