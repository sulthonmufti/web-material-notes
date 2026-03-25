/**
 * ASYNC-AWAIT PRO MODULE
 * Customized for Muhammad Sulthon Mufti
 */

// --- 0. SPA Toggler ---
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    element.querySelector('span').innerText = parent.classList.contains('active') ? '-' : '+';
}

// --- 1. Segmen 1: Dasar & Youtube ---
async function simulasiAsinkron() {
    const box = document.getElementById('status-sync');
    box.innerText = "⏳ Memulai proses asinkron...";
    
    // Menunggu 3 detik (Simulasi proses berat)
    await new Promise(res => setTimeout(res, 3000));
    
    box.innerText = "✅ Selesai! Baris ini muncul setelah 3 detik tanpa membekukan browser.";
    box.style.color = "var(--success)";
}

// Data feed berganti-ganti
const ytFeeds = [
    { title: "Belajar Flutter dalam 10 Menit", img: "https://picsum.photos/seed/flutter/400/160", info: "1.2jt x ditonton • 2 jam lalu" },
    { title: "Membangun Website dengan Laravel 11", img: "https://picsum.photos/seed/laravel/400/160", info: "800rb x ditonton • 1 hari lalu" },
    { title: "UI/UX Design Trends 2026", img: "https://picsum.photos/seed/design/400/160", info: "500rb x ditonton • 5 jam lalu" },
    { title: "Tips Coding Clean Architecture", img: "https://picsum.photos/seed/code/400/160", info: "250rb x ditonton • 12 jam lalu" }
];

async function simulateYoutubeLoad() {
    const container = document.getElementById('yt-skeleton-container');
    const btn = event.target;
    
    btn.disabled = true;
    container.innerHTML = '<div class="skeleton-box"></div>';

    // Simulasi delay jaringan
    await new Promise(res => setTimeout(res, 2000));

    // Ambil random feed
    const randomFeed = ytFeeds[Math.floor(Math.random() * ytFeeds.length)];

    container.innerHTML = `
        <div style="text-align:left; animation: fadeIn 0.5s">
            <img src="${randomFeed.img}" style="width:100%; border-radius:8px">
            <h4 style="margin:10px 0 5px">${randomFeed.title}</h4>
            <p style="font-size:0.85rem; color:#666">${randomFeed.info}</p>
        </div>
    `;
    btn.disabled = false;
}

// --- 2. Segmen 2: Sequence & Auth ---
async function simulasiUrutan() {
    const box = document.getElementById('status-await');
    box.innerText = "Langkah 1: Mengunduh data...";
    await new Promise(res => setTimeout(res, 1500));
    
    box.innerText = "Langkah 2: Memvalidasi format...";
    await new Promise(res => setTimeout(res, 1500));
    
    box.innerText = "Langkah 3: Menampilkan hasil!";
    box.style.color = "var(--success)";
}

async function simulateAuth() {
    const user = document.getElementById('user-input').value;
    const msg = document.getElementById('auth-msg');
    const btn = document.getElementById('btn-login');

    if(!user) return alert("Harap isi username!");

    btn.innerText = "Validasi...";
    btn.disabled = true;

    // Simulasi cek database
    await new Promise(res => setTimeout(res, 2000));

    msg.innerText = `✅ Akses diberikan! Selamat datang, ${user}.`;
    msg.style.color = "var(--success)";
    btn.innerText = "Berhasil Masuk";
}

// --- 3. Segmen 3: Error & Failover ---
async function simulasiError(isSuccess) {
    const box = document.getElementById('error-demo-box');
    box.innerText = "Mencoba menghubungi server...";

    try {
        await new Promise((res, rej) => {
            setTimeout(() => isSuccess ? res("Berhasil!") : rej("Network Timeout"), 1500);
        });
        box.innerText = "✅ Data berhasil diterima!";
        box.style.color = "var(--success)";
    } catch (err) {
        box.innerText = "❌ Gagal: " + err;
        box.style.color = "var(--error)";
    }
}

async function simulateFailover() {
    const log = document.getElementById('failover-log');
    const srvA = document.getElementById('srv-a');
    const srvB = document.getElementById('srv-b');
    const btn = event.target;

    btn.disabled = true;
    srvA.className = "badge"; // Reset badge
    srvB.className = "badge";
    log.innerHTML = "> Menghubungi Server Utama (A)...";

    try {
        // Simulasi Server A Down
        await new Promise((_, rej) => setTimeout(() => rej("Server A Tidak Merespon"), 2000));
    } catch (err) {
        srvA.classList.add('offline');
        log.innerHTML += `<br>> <span style="color:var(--error)">Gagal: ${err}</span>`;
        log.innerHTML += `<br>> Mencoba Failover ke Server Cadangan (B)...`;
        
        // Pindah ke Server B
        await new Promise(res => setTimeout(res, 2000));
        
        srvB.classList.add('online');
        log.innerHTML += `<br>> <span style="color:var(--success)">Sukses! Data didapat dari Server B.</span>`;
    } finally {
        btn.disabled = false;
    }
}