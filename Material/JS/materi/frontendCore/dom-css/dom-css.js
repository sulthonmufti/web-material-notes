/**
 * DOM CSS MANIPULATION LOGIC
 * Muhammad Sulthon Mufti - Learn Project
 */

// 1. SPA Accordion Logic
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// 2. Inline Style Logic (Segment 1)
function changeStyle() {
    const box = document.getElementById('box-inline');
    box.style.backgroundColor = "#e67e22";
    box.style.width = "250px";
    box.style.color = "white";
    box.style.borderRadius = "50px";
    box.innerText = "Gaya Inline!";
}

function resetInline() {
    const box = document.getElementById('box-inline');
    box.style = ""; // Cara cepat reset semua inline style
    box.innerText = "Kotak Target";
}

// 3. ClassList Logic (Segment 2)
function setSuccess() {
    const card = document.getElementById('card-status');
    card.classList.remove('bg-error'); // Pastikan tidak tumpang tindih
    card.classList.add('bg-success');
    card.innerText = "Status: Operasi Berhasil! (Success)";
}

function setError() {
    const card = document.getElementById('card-status');
    card.classList.remove('bg-success');
    card.classList.add('bg-error');
    card.innerText = "Status: Terjadi Kesalahan! (Error)";
}

function toggleHighlight() {
    const card = document.getElementById('card-status');
    card.classList.toggle('highlight');
}

// 4. Computed Style Logic (Segment 3)
function checkStyle() {
    const teks = document.getElementById('info-teks');
    const hasil = document.getElementById('hasil-cek');
    
    // Mengambil gaya yang benar-benar diterapkan browser
    const gayaAsli = window.getComputedStyle(teks);
    const warna = gayaAsli.color;
    const font = gayaAsli.fontSize;

    hasil.innerText = `Warna Terdeteksi: ${warna} | Ukuran Font: ${font}`;
    hasil.style.color = warna;
}