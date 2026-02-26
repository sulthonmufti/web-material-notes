// Fungsi untuk Dropdown/SPA Segment
function toggleSegment(element) {
    const parent = element.parentElement;
    const allSegments = document.querySelectorAll('.segment');
    
    // Opsional: Tutup segment lain jika ingin gaya Accordion
    // allSegments.forEach(s => { if(s !== parent) s.classList.remove('active'); });

    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

// Fungsi Interactive Config Generator
function updateConfigGen() {
    const name = document.getElementById('nameInput').value || "[Nama Anda]";
    const email = document.getElementById('emailInput').value || "[Email Anda]";
    const output = document.getElementById('configOutput');

    output.innerHTML = `
        <span style="color: #8b949e;"># Ketik ini di terminal:</span><br>
        git config --global user.name "${name}"<br>
        git config --global user.email "${email}"
    `;
}