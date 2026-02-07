function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// Demo Hitung
function hitungTotal() {
    const h = document.getElementById('harga').value;
    const j = document.getElementById('jumlah').value;
    const total = h * j;
    document.getElementById('hasil-hitung').innerText = "Total Bayar: Rp " + total;
}

// Demo Comparison
function cekSama() {
    const hasil = (5 == "5");
    document.getElementById('hasil-cek').innerText = "Hasil (5 == '5') adalah: " + hasil;
    document.getElementById('hasil-cek').style.color = "orange";
}

function cekStrict() {
    const hasil = (5 === "5");
    document.getElementById('hasil-cek').innerText = "Hasil (5 === '5') adalah: " + hasil;
    document.getElementById('hasil-cek').style.color = "red";
}

// Perbandingan & Logika (&&, ||, !)
function tesLogika(tipe) {
    const display = document.getElementById('status-teks');
    
    if (tipe === 'DAN') {
        // Contoh: Harus sudah bayar DAN punya kartu member
        let sudahBayar = true;
        let punyaMember = false;
        let hasil = sudahBayar && punyaMember; // false karena salah satu false
        display.innerText = "Hasil (true && false): " + hasil + " (Gagal masuk)";
        display.style.color = "red";
        
    } else if (tipe === 'ATAU') {
        // Contoh: Bisa login pakai Email ATAU Google
        let loginEmail = false;
        let loginGoogle = true;
        let hasil = loginEmail || loginGoogle; // true karena salah satu true
        display.innerText = "Hasil (false || true): " + hasil + " (Berhasil Login)";
        display.style.color = "green";
        
    } else if (tipe === 'TIDAK') {
        // Contoh: Membalikkan status menu (buka/tutup)
        let menuTerbuka = false;
        let hasil = !menuTerbuka; // true
        display.innerText = "Hasil (!false): " + hasil + " (Menu Terbuka)";
        display.style.color = "blue";
    }
}