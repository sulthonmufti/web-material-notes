/**
 * DOM EVENTS MODULE
 * Muhammad Sulthon Mufti - Learn Project
 */

// 1. Accordion Controller
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// 2. Segment 1: Click Counter
let count = 0;
const clickBox = document.getElementById('click-box');
const counterDisplay = document.getElementById('click-count');

clickBox.addEventListener('click', function() {
    count++;
    counterDisplay.innerText = count;
    
    // UI Feedback: Ganti warna acak tiap klik
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    clickBox.style.backgroundColor = "#" + randomColor;
});

// 3. Segment 2: Keyboard Visualizer
const inputVis = document.getElementById('input-visualizer');
const keyDisplay = document.getElementById('key-display');

inputVis.addEventListener('keydown', function(event) {
    keyDisplay.innerText = `Key: ${event.key} | Code: ${event.code}`;
});

// 4. Segment 3: Prevent Default Demo
const myForm = document.getElementById('my-form');
const formStatus = document.getElementById('form-status');

myForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    formStatus.style.color = "var(--success)";
    formStatus.innerText = "✅ Sukses! Form dikirim via JavaScript tanpa reload halaman.";
    
    // Reset status setelah 3 detik
    setTimeout(() => { formStatus.innerText = ""; }, 3000);
});

// 5. Segment 4: Event Delegation
const parentList = document.getElementById('parent-list');
const delegateResult = document.getElementById('delegation-result');

parentList.addEventListener('click', function(e) {
    // Mengecek apakah yang diklik benar-benar elemen LI
    if (e.target.tagName === 'LI') {
        delegateResult.innerText = `Anda mengklik: ${e.target.innerText}`;
        
        // Reset warna semua saudara
        Array.from(parentList.children).forEach(child => {
            child.style.backgroundColor = "white";
            child.style.color = "black";
        });

        // Highlight target
        e.target.style.backgroundColor = "var(--dark)";
        e.target.style.color = "var(--primary)";
    }
});