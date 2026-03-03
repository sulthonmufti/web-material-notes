function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function simulateRemoteAdd() {
    const url = document.getElementById('repoUrl').value;
    const terminal = document.getElementById('remoteTerminal');
    
    if (!url.includes("http") || !url.endsWith(".git")) {
        terminal.innerHTML = `<span style="color: #ff7b72;">Error: URL tidak valid. Gunakan format https://... .git</span>`;
        return;
    }

    terminal.innerHTML = `
<span style="color: #8b949e;">$ git remote add origin ${url}</span>
<span style="color: #8b949e;">$ git remote -v</span>
origin  ${url} (fetch)
origin  ${url} (push)
<br>
<span style="color: #7ee787;">✓ Hubungan berhasil dibuat! Sekarang Anda bisa melakukan 'git push'.</span>`;
}