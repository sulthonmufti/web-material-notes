//WEB STORAGE MASTERCLASS

// --- 0. SPA Toggler ---
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    element.querySelector('span').innerText = parent.classList.contains('active') ? '-' : '+';
}

// --- 1. Segmen 1: Local Storage & Dark Mode ---
function saveLocal() {
    const name = document.getElementById('input-nama').value;
    if(!name) return alert("Isi nama dulu!");
    localStorage.setItem('user_name', name);
    displayLocalName();
}

function displayLocalName() {
    const saved = localStorage.getItem('user_name');
    const box = document.getElementById('status-local');
    box.innerText = saved ? `Halo, ${saved}! (Data tersimpan di Browser)` : "Halo, Tamu!";
}

function clearLocal() {
    localStorage.removeItem('user_name');
    displayLocalName();
}

// Case Industri: Theme Switcher
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    document.getElementById('theme-text').innerText = isDark ? "Dark Mode" : "Light Mode";
}

// --- 2. Segmen 2: Session Storage & Wizard ---
function addSessionScore() {
    let currentScore = parseInt(sessionStorage.getItem('game_score')) || 0;
    currentScore += 10;
    sessionStorage.setItem('game_score', currentScore);
    document.getElementById('status-session').innerText = `Skor Sesi Ini: ${currentScore}`;
}

function saveWizard() {
    const val = document.getElementById('wizard-input').value;
    sessionStorage.setItem('wizard_address', val);
    document.getElementById('wizard-log').innerText = `> Tersimpan di Sesi: "${val}"`;
}

// --- 3. Segmen 3: JSON Serialization & Cart ---
function saveObject() {
    const userObj = { id: 1, dev: "Sulthon", status: "Active" };
    localStorage.setItem('dev_profile', JSON.stringify(userObj));
    
    const raw = localStorage.getItem('dev_profile');
    document.getElementById('status-json').innerText = `Teks Mentah: ${raw}`;
}

let cart = JSON.parse(localStorage.getItem('my_cart')) || [];
function addToCart(item) {
    cart.push({ id: Date.now(), name: item });
    localStorage.setItem('my_cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-list');
    if(cart.length === 0) {
        list.innerHTML = "<li>🛒 Keranjang kosong</li>";
        return;
    }
    list.innerHTML = cart.map(item => `<li>✅ ${item.name}</li>`).join('');
}

// --- INIT: Load Saved States ---
window.onload = () => {
    // Load Local Name
    displayLocalName();
    
    // Load Theme
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeUI(true);
    }

    // Load Session Score
    const savedScore = sessionStorage.getItem('game_score') || 0;
    document.getElementById('status-session').innerText = `Skor Sesi Ini: ${savedScore}`;

    // Load Cart
    renderCart();
};