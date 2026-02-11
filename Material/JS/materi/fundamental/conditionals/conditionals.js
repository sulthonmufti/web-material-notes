function toggleSegment(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
  const span = element.querySelector("span");
  span.innerText = parent.classList.contains("active") ? "-" : "+";
}

// Demo Segmen 1
function cekNilai() {
  const n = document.getElementById("input-nilai").value;
  const hasil = document.getElementById("hasil-nilai");

  if (n === "") {
    hasil.innerText = "Masukkan nilai dulu!";
    hasil.style.color = "orange";
  } else if (n >= 75) {
    hasil.innerText = "LULUS! Selamat.";
    hasil.style.color = "green";
  } else {
    hasil.innerText = "TIDAK LULUS. Tetap semangat!";
    hasil.style.color = "red";
  }
}

// Demo Segmen 2
function gantiTema() {
  const warna = document.getElementById("pilih-warna").value;
  const kotak = document.getElementById("kotak-warna");

  switch (warna) {
    case "Merah":
      kotak.style.backgroundColor = "#ff4d4d";
      break;
    case "Biru":
      kotak.style.backgroundColor = "#3498db";
      break;
    case "Hijau":
      kotak.style.backgroundColor = "#2ecc71";
      break;
    default:
      kotak.style.backgroundColor = "transparent";
  }
}

// Demo Segmen 3
let isLoggedIn = false;
function toggleLogin() {
  isLoggedIn = !isLoggedIn;
  // Penggunaan Ternary Operator
  const statusText = isLoggedIn
    ? "Status: LOGIN (Selamat Datang)"
    : "Status: Logout";
  document.getElementById("teks-login").innerText = statusText;
  document.getElementById("teks-login").style.color = isLoggedIn
    ? "green"
    : "red";
}
