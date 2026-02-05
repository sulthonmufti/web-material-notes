function changePage() {
    const selectedPage = document.getElementById('pageSelect').value;
    const pages = document.querySelectorAll('.materi-content');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(selectedPage).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if(selectedPage === 'sse-intro') {
        simulateSSE();
    }
}

function simulateSSE() {
    const status = document.getElementById("sseStatus");
    const dataBox = document.getElementById("sseData");
    
    status.innerHTML = "Terhubung (Simulasi)";
    status.style.color = "green";
    
    // Simulasi data masuk setiap 3 detik
    setInterval(() => {
        const randomStock = (Math.random() * 1000).toFixed(2);
        dataBox.innerHTML = "Harga Saham: $" + randomStock;
        dataBox.style.color = "#e67e22";
    }, 3000);
}
