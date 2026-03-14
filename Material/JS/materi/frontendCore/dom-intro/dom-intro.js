// Fungsi untuk Dropdown / Accordion
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// Demo Selection (Segmen 2)
function ubahTeks() {
    const target = document.getElementById("teks-demo");
    const hasil = document.getElementById("hasil-seleksi");
    
    // Memberikan efek visual
    target.style.color = "#27ae60";
    target.innerText = "Teks Berhasil Dimanipulasi!";
    
    hasil.innerText = "Info: JavaScript baru saja mengeksekusi getElementById().";
}

// Demo Manipulation (Segmen 3)
function gantiWarna() {
    const kotak = document.getElementById("kotak-warna");
    
    kotak.style.backgroundColor = "#222";
    kotak.style.color = "#f7df1e";
    kotak.style.borderColor = "#f7df1e";
    kotak.innerText = "Mode: Dark";
}

function resetWarna() {
    const kotak = document.getElementById("kotak-warna");
    
    kotak.style.backgroundColor = "white";
    kotak.style.color = "#333";
    kotak.style.borderColor = "#ccc";
    kotak.innerText = "Preview Box";
}