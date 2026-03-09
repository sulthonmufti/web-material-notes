function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function simulateClone() {
    const url = document.getElementById('cloneInput').value;
    const terminal = document.getElementById('cloneProgress');
    
    if (!url.trim()) {
        alert("Masukkan URL repositori terlebih dahulu!");
        return;
    }

    terminal.style.display = "block";
    terminal.innerHTML = `Cloning into 'proyek-lokal'...<br>`;

    const steps = [
        "remote: Enumerating objects: 105, done.",
        "remote: Counting objects: 100% (105/105), done.",
        "remote: Compressing objects: 100% (82/82), done.",
        "Receiving objects: 100% (105/105), 1.24 MiB | 4.20 MiB/s, done.",
        "Resolving deltas: 100% (45/45), done.",
        "<span style='color: #7ee787;'>✓ Berhasil! Folder proyek telah siap di komputer Anda.</span>"
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < steps.length) {
            terminal.innerHTML += steps[i] + "<br>";
            i++;
        } else {
            clearInterval(interval);
        }
    }, 600);
}