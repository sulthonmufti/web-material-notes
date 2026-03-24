/**
 * JSON BASICS MODULE
 * Muhammad Sulthon Mufti - Learn Project
 */

// 1. Accordion SPA Logic
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// 2. Stringify Demo Logic
function runStringify() {
    const objData = {
        id: 101,
        role: "Designer",
        tools: ["Figma", "VS Code"],
        isActive: true
    };

    // Proses konversi objek ke String JSON
    const jsonString = JSON.stringify(objData, null, 2); // null, 2 untuk indentasi rapi
    
    const output = document.getElementById('json-output');
    output.innerText = jsonString;
    output.style.color = "#fab1a0"; // Visual feedback warna berbeda
}

// 3. Parse Demo Logic
function runParse() {
    const rawJson = '{ "user": "Sulthon", "isVerified": true, "points": 1500 }';
    
    // Proses konversi String JSON ke Objek JS
    try {
        const objResult = JSON.parse(rawJson);
        
        const display = document.getElementById('parse-result');
        display.innerHTML = `
            Hasil Parsing Objek:<br>
            👤 User: <span style="color:var(--accent)">${objResult.user}</span><br>
            ⭐ Points: <span style="color:var(--accent)">${objResult.points}</span>
        `;
    } catch (error) {
        alert("JSON tidak valid!");
    }
}

/**
 * TIPS UNTUK SULTHON:
 * Dalam JSON, urutan key tidak dijamin tetap sama saat diparse.
 * Jangan pernah meletakkan fungsi (function) di dalam JSON karena 
 * fungsi akan hilang saat di-stringify. JSON hanya untuk DATA.
 */