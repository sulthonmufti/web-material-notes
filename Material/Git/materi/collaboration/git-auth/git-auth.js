function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function simulateAuthTest() {
    const term = document.getElementById('authTerminal');
    term.innerHTML = `<span style="color: #8b949e;">$ ssh -T git@github.com</span><br>`;
    
    setTimeout(() => {
        term.innerHTML += `Hi user-pro! You've successfully authenticated, but GitHub does not provide shell access.<br>`;
        term.innerHTML += `<span style="color: #7ee787;">✓ Koneksi SSH Aktif dan Aman!</span>`;
    }, 1000);
}