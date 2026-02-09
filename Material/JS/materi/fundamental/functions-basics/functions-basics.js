function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// Demo Parameters
function panggilSapaan() {
    const namaInput = document.getElementById('input-nama').value;
    const hasil = sapa(namaInput); // Memanggil function sapa dengan argumen
    document.getElementById('hasil-sapaan').innerText = hasil;
}

function sapa(nama) {
    if (nama === "") return "Nama belum diisi!";
    return "Halo " + nama + ", selamat datang di portal belajar!";
}

// Demo Return
function demoReturn() {
    const s = document.getElementById('sisi').value;
    const luas = hitungLuas(s); // Hasil return disimpan di variabel luas
    document.getElementById('hasil-luas').innerText = "Luas adalah: " + luas;
}

function hitungLuas(sisi) {
    return sisi * sisi;
}