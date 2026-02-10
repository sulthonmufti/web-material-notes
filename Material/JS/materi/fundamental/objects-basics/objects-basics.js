function toggleSegment(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
  const span = element.querySelector("span");
  span.innerText = parent.classList.contains("active") ? "-" : "+";
}

const maba = {
  nama: "Rizky",
  jurusan: "Informatika",
  info: function () {
    return this.nama + " dari jurusan " + this.jurusan;
  },
};

function demoAkses(tipe) {
  const display = document.getElementById("hasil-akses");
  if (tipe === "dot") {
    display.innerText = "Hasil (maba.nama): " + maba.nama;
  } else {
    display.innerText = "Hasil (maba['jurusan']): " + maba["jurusan"];
  }
}

function jalankanMethod() {
  document.getElementById("hasil-method").innerText = maba.info();
}
