// SPA Accordion Logic
function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
    const span = element.querySelector('span');
    span.innerText = parent.classList.contains('active') ? '-' : '+';
}

// Demo Segmen 1: CreateElement
let itemCounter = 1;
function tambahItem() {
    const container = document.getElementById('list-container');
    
    // Hapus placeholder jika ada
    if (itemCounter === 1) container.innerHTML = "";

    // 1. Buat elemen
    const li = document.createElement('div');
    
    // 2. Beri isi & style
    li.innerText = "📌 Item Ke-" + itemCounter;
    li.style.padding = "5px";
    li.style.borderBottom = "1px solid #ddd";
    li.style.textAlign = "left";

    // 3. Tempelkan ke DOM
    container.appendChild(li);
    itemCounter++;
}

// Demo Segmen 2: Remove
function hapusAlert() {
    const alertBox = document.getElementById('alert-box');
    if(alertBox) {
        alertBox.remove();
        alert( "Elemen Alert telah dihapus dari DOM Tree!" );
    }
}

// Demo Segmen 3: Attributes
function togglePassword() {
    const input = document.getElementById('input-pass');
    
    // Ambil tipe atribut saat ini
    const typeSekarang = input.getAttribute('type');

    if (typeSekarang === 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

/**
 * RINGKASAN TEKNIS:
 * - document.createElement() membuat elemen 'melayang' di memori.
 * - appendChild() membuatnya terlihat oleh user.
 * - setAttribute() mengubah 'identitas' elemen di balik layar.
 */