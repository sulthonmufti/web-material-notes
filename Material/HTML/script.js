const materiHTMLData = {
    // Kategori: DASAR (Wajib untuk pemula)
    dasar: [
        { nama: "HTML Introduction & Editors", file: "intro-editors" },
        { nama: "HTML Basic & Elements", file: "basic-elements" },
        { nama: "HTML Attributes", file: "attributes" },
        { nama: "Headings, Paragraphs, Styles", file: "text-basics" },
        { nama: "Formatting & Quotations", file: "formatting-quotations" },
        { nama: "Comments", file: "comments" },
        { nama: "CSS in HTML (Internal, External, Inline)", file: "html-css" }
    ],

    // Kategori: ELEMEN MENENGAH (Struktur & Navigasi)
    menengah: [
        { nama: "Links & Images", file: "links-images" },
        { nama: "Tables", file: "tables" },
        { nama: "Lists (Ordered & Unordered)", file: "lists" },
        { nama: "Block & Inline Elements", file: "block-inline" },
        { nama: "Classes & Id", file: "class-id" },
        { nama: "Iframes", file: "iframes" },
        { nama: "File Paths", file: "file-paths" },
        { nama: "Head & Layout Semantics", file: "head-layout" }
    ],

    // Kategori: FORMULIR & GRAFIK (Interaksi User)
    formulir_grafik: [
        { nama: "HTML Forms & Attributes", file: "forms-attributes" },
        { nama: "Form Elements & Input Types", file: "form-elements-inputs" },
        { nama: "Input Attributes", file: "input-attributes" },
        { nama: "Canvas & SVG", file: "graphics-canvas-svg" },
        { nama: "Media (Video & Audio)", file: "media-video-audio" },
        { nama: "YouTube Integration", file: "youtube" }
    ],

    // Kategori: LANJUTAN (HTML5 APIs)
    lanjutan: [
        { nama: "Geolocation", file: "geolocation" },
        { nama: "Drag and Drop", file: "drag-drop" },
        { nama: "Web Storage (Local/Session)", file: "web-storage" },
        { nama: "Web Workers & SSE", file: "workers-sse" }
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
    if (kategori && materiData[kategori]) {
        const materiList = materiData[kategori];

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
        const url = `materi/${kategori}/${materiFile}.html`;
        
        // Pindah ke halaman materi yang dipilih
        window.location.href = url;
    } else {
        alert("Mohon pilih kategori dan nama materi.");
    }
}