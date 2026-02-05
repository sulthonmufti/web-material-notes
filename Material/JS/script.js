const materiJSData = {
    // Kategori: FUNDAMENTAL (Wajib: Logika dasar sebelum manipulasi tampilan)
    fundamental: [
        { nama: "JS Introduction, Syntax, Comments", file: "intro-syntax" },
        { nama: "Variables (let, const)", file: "variables-let-const" },
        { nama: "Data Types & Operators", file: "types-operators" },
        { nama: "Functions & Arrow Functions", file: "functions-basics" },
        { nama: "Objects (Introduction & Properties)", file: "objects-basics" },
        { nama: "Arrays (Introduction & Basic Methods)", file: "arrays-basics" },
        { nama: "Conditions (If Else, Switch)", file: "conditionals" },
        { nama: "Loops (For, While, Iterables)", file: "loops" }
    ],

    // Kategori: FRONTEND CORE (Sangat Wajib: Ini inti dari pekerjaan Frontend)
    frontendCore: [
        { nama: "DOM Introduction & Methods", file: "dom-intro" },
        { nama: "DOM Elements & HTML Manipulation", file: "dom-elements-html" },
        { nama: "DOM CSS Styling via JS", file: "dom-css" },
        { nama: "DOM Events & Event Listeners", file: "dom-events" },
        { nama: "JSON (Parse & Stringify)", file: "json-basics" },
        { nama: "Asynchronous (Promises, Async/Await)", file: "async-await" },
        { nama: "Web API: Fetch (Ambil Data API)", file: "api-fetch" },
        { nama: "Web Storage (Local & Session Storage)", file: "web-storage" }
    ],

    // Kategori: MODERN JS & CLEAN CODE (Lanjutan: Standar industri saat ini)
    modernJS: [
        { nama: "ES6+ (Destructuring, Spread, Template Literals)", file: "es6-features" },
        { nama: "Array Iteration (Map, Filter, Reduce)", file: "array-iteration" },
        { nama: "JS Modules (Import/Export)", file: "modules" },
        { nama: "Classes & Inheritance", file: "classes" },
        { nama: "Scope, Hoisting, & 'this' Keyword", file: "advanced-logic" },
        { nama: "Error Handling (Try...Catch)", file: "error-handling" }
    ],

    // Kategori: TAMBAHAN/OPSIONAL (Pelajari hanya jika butuh di proyek)
    tambahan: [
        { nama: "Date & Math Objects", file: "date-math" },
        { nama: "RegExp (Regular Expressions)", file: "regex" },
        { nama: "JS Graphics (Canvas, Chart.js)", file: "graphics" },
        { nama: "Debugging Tools (Console, Debugger)", file: "debugging" },
        { nama: "Web Worker API", file: "web-workers" }
    ]
};


const kategoriSelect = document.getElementById('kategori');
const materiSelect = document.getElementById('materi');
const belajarButton = document.getElementById('belajarButton');

// Fungsi yang dipanggil saat Kategori diubah
function updateMateri() {
    const kategori = kategoriSelect.value;

    // 1. Reset dropdown materi dan status tombol
    materiSelect.innerHTML = '<option value="">-- Pilih Materi --</option>';
    materiSelect.disabled = true;
    belajarButton.disabled = true;

    // 2. Isi dropdown berdasarkan kategori yang dipilih
    if (kategori && materiJSData[kategori]) {
        const materiList = materiJSData[kategori];

        materiList.forEach(item => {
            const option = document.createElement('option');
            // value option akan menjadi nama file
            option.value = item.file; 
            option.textContent = item.nama;
            materiSelect.appendChild(option);
        });

        materiSelect.disabled = false;
        
        // Cek apakah ada materi yang dipilih saat dropdown materi diubah
        materiSelect.onchange = () => {
            belajarButton.disabled = !materiSelect.value;
        };
    }
}

// Fungsi yang dipanggil saat tombol "Belajar" diklik
function goToMateri() {
    const kategori = kategoriSelect.value;
    const materiFile = materiSelect.value;

    if (kategori && materiFile) {
        // Logika pembuatan URL: materi/kategori/namafile.html
        // Contoh: materi/wajib/box-model.html
        const url = `materi/${kategori}/${materiFile}/${materiFile}.html`;
        
        // Pindah ke halaman materi yang dipilih
        window.location.href = url;
    } else {
        alert("Mohon pilih kategori dan nama materi.");
    }
}