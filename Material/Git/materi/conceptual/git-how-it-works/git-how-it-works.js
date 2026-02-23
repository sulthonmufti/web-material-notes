function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

// Simulasi Hashing sederhana untuk edukasi
function generateSimulatedHash() {
    const input = document.getElementById('hash-input').value;
    const output = document.getElementById('hash-output');
    
    if (input.length === 0) {
        output.innerText = "e04fd...";
        return;
    }

    // Algoritma sederhana hanya untuk visualisasi (bukan SHA-1 asli)
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; 
    }
    
    // Ubah jadi hex string 40 karakter buatan
    const fakeHash = Math.abs(hash).toString(16).padEnd(40, 'fca82910ccb321');
    output.innerText = fakeHash.substring(0, 40);
}