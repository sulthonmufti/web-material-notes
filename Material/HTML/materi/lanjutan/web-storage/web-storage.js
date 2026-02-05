function changePage() {
    const selectedPage = document.getElementById('pageSelect').value;
    const pages = document.querySelectorAll('.materi-content');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(selectedPage).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Web Storage Logic
function simpanNama() {
    const nama = document.getElementById("inputNama").value;
    if (nama) {
        localStorage.setItem("namaUser", nama);
        updateDisplay();
    }
}

function hapusSemua() {
    localStorage.removeItem("namaUser");
    updateDisplay();
}

function updateDisplay() {
    const namaTersimpan = localStorage.getItem("namaUser");
    const display = document.getElementById("hasilStorage");
    if (namaTersimpan) {
        display.innerHTML = `Selamat datang kembali, <b>${namaTersimpan}</b>!`;
    } else {
        display.innerHTML = `Halo, <b>Tamu</b>!`;
    }
}

// Jalankan saat halaman dimuat
window.onload = updateDisplay;
