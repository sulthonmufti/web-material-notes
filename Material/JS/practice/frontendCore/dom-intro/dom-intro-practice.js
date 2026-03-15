/**
 * PRACTICE: DOM Intro - Isi function di bawah berdasarkan materi
 * Materi: getElementById, innerText/innerHTML, style, classList, .value
 */

// ========== 1. COUNTER ==========
// Simpan nilai counter (naik saat tambah, reset jadi 0)
let nilaiCounter = 0;

function tambahCounter() {
    // TODO: seleksi elemen #counter-value, naikkan nilaiCounter, ubah innerText
    const count = document.getElementById('counter-value').value;

    nilaiCounter++;

    document.getElementById('counter-value').innerText = nilaiCounter;

}

function resetCounter() {
    // TODO: set nilaiCounter = 0, seleksi #counter-value, ubah innerText jadi 0
    const count = document.getElementById('counter-value').value;

    nilaiCounter = 0;
    document.getElementById('counter-value').innerText = nilaiCounter;
}

// ========== 2. KARTU PROFIL ==========
function tampilkanNama() {
    // TODO: getElementById("input-nama"), baca .value
    // TODO: getElementById("output-nama"), set innerText misal "Halo, [nama]!"

    const name = document.getElementById('input-nama').value;
    document.getElementById('output-nama').innerText = `Halo ${name}!`;
}

// ========== 3. UBAH WARNA KOTAK ==========
function warnaMerah() {
    // TODO: seleksi #kotak-demo, set style.backgroundColor dan style.color, ubah innerText
    const demoBackground = document.getElementById('kotak-demo').style.backgroundColor = "red";
    const demoColor = document.getElementById('kotak-demo').style.color = "white";
}

function warnaHijau() {
    // TODO: seleksi #kotak-demo, set style backgroundColor hijau, color white, innerText
    //const demo =  document.getElementById('kotak-demo').value;

    const demoBackground = document.getElementById('kotak-demo').style.backgroundColor = "green";
    const demoColor = document.getElementById('kotak-demo').style.color = "white";
}

function warnaDefault() {
    // TODO: kembalikan #kotak-demo ke warna awal (bg white, color #333, innerText "Ubah warnaku")
    const demoBackground = document.getElementById('kotak-demo').style.backgroundColor = "white";
    const demoColor = document.getElementById('kotak-demo').style.color = "#333";
}

// ========== 4. TOGGLE DARK MODE ==========
function toggleDarkMode() {
    // TODO: document.body.classList.toggle("dark-mode")
    // TODO: ubah teks #btn-theme (misal "Aktifkan Dark Mode" / "Aktifkan Light Mode")
    // TODO: ubah teks #status-theme (misal "Mode: Terang" / "Mode: Gelap")
    // Hint: cek document.body.classList.contains("dark-mode") untuk tahu state saat ini

    const dark = document.body.classList.toggle('dark-mode');

    //pakai ternary operator
    document.getElementById('btn-theme').innerText = dark ? 'Aktifkan Light Mode' : 'Aktifkan Dark Mode';
    document.getElementById('status-theme').innerText = dark ? 'Mode: Terang' : 'Mode: Gelap';

    //bisa juga gini:
    //const dark = document.body.classList.toggle('dark-mode');
    // const btnTheme = document.getElementById('btn-theme');
    // const statusTheme = document.getElementById('status-theme');
    
    // if (dark) {
    //     btnTheme.textContent = 'Aktifkan Light Mode';
    //     statusTheme.textContent = 'Mode: Gelap';
    // } else {
    //     btnTheme.textContent = 'Aktifkan Dark Mode';
    //     statusTheme.textContent = 'Mode: Terang';
    //}

}
