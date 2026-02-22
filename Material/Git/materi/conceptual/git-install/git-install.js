function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function checkGitVersion() {
    const input = document.getElementById('terminal-input').value.trim();
    const output = document.getElementById('terminal-output');

    if (input === "git --version") {
        output.innerHTML = "> git version 2.43.0.windows.1 <br>✅ Git berhasil terinstal dan siap digunakan!";
        output.style.color = "#28a745";
    } else if (input === "") {
        output.innerHTML = "❌ Masukkan perintah terlebih dahulu.";
        output.style.color = "#ea4a5a";
    } else {
        output.innerHTML = `❌ Command '${input}' tidak dikenali. Coba ketik: git --version`;
        output.style.color = "#ea4a5a";
    }
}