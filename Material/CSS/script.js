// Data materi dikelompokkan berdasarkan kategori
// NOTE: Nama file (properti 'file') diubah menjadi huruf kecil dan dipisahkan strip (-)
// agar sesuai dengan praktik penamaan file yang baik (misalnya, 'box-model.html').

const materiData = {
    // Kategori: WAJIB (Wajib dikuasai sebelum pindah ke JavaScript)
    wajib: [
        { nama: "CSS Introduction, Syntax, How To", file: "intro-syntax-howto" },
        { nama: "Colors, Background", file: "colors-background" },
        { nama: "Text, Font", file: "text-font" },
        { nama: "Box Model", file: "box-model" },
        { nama: "Margin, Padding, Border, Height/Width", file: "margin-padding-border-size" },
        { nama: "Display Property", file: "display" },
        { nama: "Position, Z-index", file: "position-zindex" },
        { nama: "List, Link, Tables", file: "list-link-tables" },
        { nama: "Units (px, em, rem, %)", file: "units" },
        { nama: "Specificity, !important", file: "specificity-important" }
    ],

    // Kategori: LANJUTAN/MAHIR (Kuasai setelah Wajib atau sambil belajar JS)
    lanjutan: [
        { nama: "CSS Flexbox", file: "flexbox" },
        { nama: "CSS Grid", file: "grid" },
        { nama: "Media Queries", file: "media-queries" },
        { nama: "Transitions, Animations, 2D/3D Transforms", file: "transforms-transitions-animations" },
        { nama: "Navigation Bars, Dropdowns", file: "navigation-dropdowns" },
        { nama: "Pseudo-elements/classes, Combinators", file: "pseudo-elements-combinators" },
        { nama: "Overflow, Float, Inline-block", file: "overflow-float-inlineblock" },
        { nama: "Box Sizing", file: "box-sizing" },
        { nama: "Variables", file: "variables" }
    ],

    // Kategori: TAMBAHAN/KHUSUS (Pelajari Sesuai Kebutuhan Proyek)
    tambahan: [
        { nama: "Comments, Error, Optimization", file: "comments-error-optimization" },
        { nama: "Outline, Max-width, Opacity", file: "outline-maxwidth-opacity" },
        { nama: "Image Styling, Modals, Filters, etc.", file: "image-styling" },
        { nama: "Rounded Corners, Gradients, Shadows", file: "rounded-corners-gradients-shadows" },
        { nama: "Tooltips, Buttons, Pagination", file: "tooltips-buttons-pagination" },
        { nama: "CSS SASS (Pre-processor)", file: "sass" }
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