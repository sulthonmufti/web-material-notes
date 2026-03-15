function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

let isStashed = false;

function runStashAction(action) {
    const term = document.getElementById('stashTerminal');
    const status = document.getElementById('stashStatus');

    if (action === 'stash') {
        if (isStashed) {
            status.innerText = "Info: Working directory sudah bersih.";
            return;
        }
        term.innerHTML = `
            <span style="color: #8b949e;">$ git stash</span><br>
            Saved working directory and index state WIP on main: c2b4a1...<br>
            <span style="color: #7ee787;">✓ Working Directory Sekarang Bersih.</span>
        `;
        status.innerText = "Status: Kode Anda sekarang aman tersimpan di dalam laci.";
        isStashed = true;
    } else if (action === 'pop') {
        if (!isStashed) {
            status.innerText = "Error: Tidak ada stash untuk diambil!";
            return;
        }
        term.innerHTML = `
            <span style="color: #8b949e;">$ git stash pop</span><br>
            On branch main<br>
            Changes not staged for commit: 'index.html' (modified)<br>
            Dropped refs/stash@{0} (a2f1...3)<br>
            <span style="color: #7ee787;">✓ Kode Anda telah kembali!</span>
        `;
        status.innerText = "Status: Kode berhasil dikeluarkan dari laci.";
        isStashed = false;
    }
}