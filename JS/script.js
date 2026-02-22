// file harus string (nama folder yang akan digunakan dalam URL)
const materiData = [
  { nama: "HTML", file: "HTML" },
  { nama: "CSS",  file: "CSS"  },
  { nama: "JS",   file: "JS"   },
  { nama: "Git",   file: "Git"   }
];

const materiSelect = document.getElementById('materi');
const belajarButton = document.getElementById('belajarButton');

function updateMateri() {
  // reset dropdown dan tombol
  materiSelect.innerHTML = '<option value="">--pilih Kategori--</option>';
  belajarButton.disabled = true;

  // isi opsi dari data
  materiData.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.file;   // ini yang dipakai untuk membangun path
    opt.textContent = item.nama;
    materiSelect.appendChild(opt);
  });

  materiSelect.disabled = false;

  // aktifkan tombol saat ada pilihan
  materiSelect.onchange = () => {
    belajarButton.disabled = !materiSelect.value;
  };
}

function goToMateri() {
  const materiFile = materiSelect.value;
  if (materiFile) {
    // sesuaikan nama folder 'Material' atau 'Materials' di filesystem Anda
    const url = `Material/${materiFile}/index.html`;
    window.location.href = url;
  } else {
    alert("Please select the material first!");
  }
}

// panggil update dan pasang handler — aman karena script berada di akhir body
updateMateri();
belajarButton.addEventListener('click', goToMateri);