function changePage() {
    const selectedPage = document.getElementById('pageSelect').value;
    const pages = document.querySelectorAll('.materi-content');
    
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(selectedPage).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getLocation() {
    const display = document.getElementById("locationDisplay");
    display.innerHTML = "Sedang mencari...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                display.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
            },
            (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        display.innerHTML = "Error: Anda menolak akses lokasi.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        display.innerHTML = "Error: Lokasi tidak ditemukan.";
                        break;
                    case error.TIMEOUT:
                        display.innerHTML = "Error: Waktu habis.";
                        break;
                    default:
                        display.innerHTML = "Error: Terjadi kesalahan.";
                        break;
                }
            }
        );
    } else {
        display.innerHTML = "Geolocation tidak didukung oleh browser Anda.";
    }
}
