/**
 * API FETCH MASTERCLASS MODULE
 * Designed for Muhammad Sulthon Mufti
 */

// --- 0. SPA Toggler ---
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    element.querySelector('span').innerText = parent.classList.contains('active') ? '-' : '+';
}

// --- 1. Segmen 1: Dasar Fetch & User Profile ---
async function simulasiFetchDasar() {
    const box = document.getElementById('status-fetch-basic');
    box.innerText = "🌐 Menghubungi endpoint: /api/data...";
    
    await new Promise(res => setTimeout(res, 1500));
    box.innerText = "📥 Response diterima! Status: 200 OK. Data berhasil di-parse ke JSON.";
    box.style.color = "var(--success)";
}

async function simulateUserProfileFetch() {
    const container = document.getElementById('user-card-container');
    container.innerHTML = "⏳ Loading user data...";

    // Simulasi Network Latency
    await new Promise(res => setTimeout(res, 2000));

    // Data Simulasi dari Server
    const userData = {
        name: "Muhammad Sulthon Mufti",
        role: "Frontend Developer & UI/UX",
        avatar: "https://i.pravatar.cc/150?u=sulthon"
    };

    container.innerHTML = `
        <div class="user-card">
            <img src="${userData.avatar}" alt="Avatar">
            <div>
                <h4 style="margin:0">${userData.name}</h4>
                <p style="margin:0; font-size:0.85rem; color:#666">${userData.role}</p>
            </div>
        </div>
    `;
}

// --- 2. Segmen 2: POST Method & Product Add ---
async function simulasiPostDasar() {
    const box = document.getElementById('status-post-basic');
    box.innerText = "📤 Mengirim payload JSON ke server...";
    
    await new Promise(res => setTimeout(res, 1500));
    box.innerText = "✅ Server merespon: Data berhasil disimpan di Database.";
    box.style.color = "var(--success)";
}

async function simulateAddProduct() {
    const name = document.getElementById('prod-name').value;
    const log = document.getElementById('post-log');

    if(!name) return alert("Isi nama produk!");

    log.innerHTML = `> Membungkus data: { "product": "${name}" }...`;
    
    await new Promise(res => setTimeout(res, 1500));
    log.innerHTML += `<br>> Mengirim ke POST /api/products...`;
    
    await new Promise(res => setTimeout(res, 1500));
    log.innerHTML += `<br>> <span style="color:var(--success)">SUKSES: Produk "${name}" ID #882 telah dibuat.</span>`;
}

// --- 3. Segmen 3: Error Handling & Toast ---
function checkStatus(code) {
    const box = document.getElementById('status-error-box');
    if(code === 200) {
        box.innerText = "Status 200: Semuanya berjalan lancar!";
        box.style.color = "var(--success)";
    } else {
        box.innerText = "Status 404: Endpoint tidak ditemukan. Periksa URL Anda.";
        box.style.color = "var(--error)";
    }
}

async function simulateApiError() {
    const toastCont = document.getElementById('toast-container');
    toastCont.innerHTML = "📡 Mencoba fetch...";
    
    await new Promise(res => setTimeout(res, 1500));
    
    // Simulasi Error 500
    toastCont.innerHTML = `
        <div style="background:var(--error); color:white; padding:10px; border-radius:5px; animation: fadeIn 0.3s">
            ⚠️ Terjadi Gangguan Server (Error 500). Coba lagi nanti.
        </div>
    `;
    
    setTimeout(() => { toastCont.innerHTML = ""; }, 4000);
}