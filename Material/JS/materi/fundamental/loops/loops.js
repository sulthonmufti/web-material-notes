function toggleSegment(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
  const span = element.querySelector("span");
  span.innerText = parent.classList.contains("active") ? "-" : "+";
}

// Demo For Loop
function jalankanFor() {
  const n = document.getElementById("input-for").value;
  let hasil = "";
  for (let i = 1; i <= n; i++) {
    hasil += i + (i == n ? "" : ", ");
  }
  document.getElementById("hasil-for").innerText = "Hasil: " + (hasil || "0");
}

// Demo While Loop
function kocokDadu() {
  let dadu = 0;
  let riwayat = [];
  while (dadu !== 6) {
    dadu = Math.floor(Math.random() * 6) + 1;
    riwayat.push(dadu);
  }
  document.getElementById("hasil-while").innerText =
    "Hasil kocokan: " + riwayat.join(" -> ") + " (Berhasil!)";
}

// Demo For...Of
function tampilkanBelanja() {
  const keranjang = ["Buku", "Pena", "Tas", "Sepatu"];
  const listUI = document.getElementById("list-belanja");
  listUI.innerHTML = ""; // Bersihkan list lama

  for (let item of keranjang) {
    let li = document.createElement("li");
    li.innerText = item;
    listUI.appendChild(li);
  }
}


// JS untuk Case Pagination (For)
function renderPagination() {
    const total = document.getElementById('total-page-input').value;
    const container = document.getElementById('pagination-visual');
    container.innerHTML = ""; // Reset

    for (let i = 1; i <= total; i++) {
        const btn = document.createElement('button');
        btn.className = "page-btn";
        btn.innerText = i;
        btn.onclick = () => alert("Pindah ke Halaman " + i);
        container.appendChild(btn);
    }
}

// JS untuk Case Retry (While)
function simulateRetry() {
    const log = document.getElementById('retry-log');
    const status = document.getElementById('status-koneksi');
    log.innerHTML = "";
    status.style.display = "block";
    status.innerText = "Menghubungkan...";
    status.style.background = "#eee";

    let attempt = 1;
    let isConnected = false;

    // Kita gunakan simulasi perulangan dengan interval agar visual terlihat "berproses"
    const interval = setInterval(() => {
        if (attempt <= 3 && !isConnected) {
            log.innerHTML += `Percobaan ${attempt}: Gagal...<br>`;
            // Simulasi sukses di percobaan ke-3
            if (attempt === 3) {
                isConnected = true;
                status.innerText = "✅ Berhasil Terhubung!";
                status.style.background = "#d4edda";
                clearInterval(interval);
            }
            attempt++;
        }
    }, 800);
}

// JS untuk Case Product (For...Of)
function renderProducts() {
    const products = [
        { name: "Smartphone", price: "2jt" },
        { name: "Laptop", price: "8jt" },
        { name: "Headset", price: "500rb" },
        { name: "Watch", price: "1.5jt" }
    ];
    const grid = document.getElementById('product-visual');
    grid.innerHTML = "";

    for (const p of products) {
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-img"></div>
                <div style="font-weight:bold">${p.name}</div>
                <div style="color:green; font-size:0.9rem">${p.price}</div>
            </div>
        `;
    }
}

// JS untuk Demo Dasar For...In
function ekstrakProfil() {
    const user = { nama: "Alex", role: "Admin", status: "Aktif" };
    const listUI = document.getElementById('list-profil');
    listUI.innerHTML = "";

    for (let properti in user) {
        let li = document.createElement('li');
        // Mengambil nama kunci (properti) dan isinya user[properti]
        li.innerHTML = `<strong>${properti}:</strong> ${user[properti]}`;
        listUI.appendChild(li);
    }
}

// JS untuk Case Industri (Generate Table)
function generateTable() {
    // Simulasi data dari Database
    const dataUser = { 
        ID: "USR-001", 
        Username: "alex_pro", 
        Email: "alex@mail.com", 
        Join: "2024-01-10",
        Level: "Gold"
    };

    const headerRow = document.getElementById('table-header');
    const bodyRow = document.getElementById('table-body');
    
    headerRow.innerHTML = "";
    bodyRow.innerHTML = "";

    for (let label in dataUser) {
        // Buat Header (TH) berdasarkan Nama Key
        let th = document.createElement('th');
        th.innerText = label;
        th.style.padding = "5px";
        headerRow.appendChild(th);

        // Buat Isi (TD) berdasarkan Value
        let td = document.createElement('td');
        td.innerText = dataUser[label];
        td.style.padding = "5px";
        bodyRow.appendChild(td);
    }
}