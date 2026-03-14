function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function checkIgnore() {
    const input = document.getElementById('fileInput').value.toLowerCase();
    const terminal = document.getElementById('ignoreTerminal');
    
    if (!input) {
        terminal.innerHTML = "$ Silakan masukkan nama file...";
        return;
    }

    const ignoredPatterns = ['.env', 'node_modules', '.ds_store', '.log', 'dist'];
    const isIgnored = ignoredPatterns.some(pattern => input.includes(pattern));

    if (isIgnored) {
        terminal.innerHTML = `
            $ git status<br>
            On branch main<br>
            nothing to commit, working tree clean<br>
            <span style="color: #8b949e;">(File '${input}' diabaikan oleh .gitignore)</span>`;
    } else {
        terminal.innerHTML = `
            $ git status<br>
            On branch main<br>
            Untracked files:<br>
            <span style="color: #ff7b72;">&nbsp;&nbsp;${input}</span><br>
            <br>
            nothing added to commit but untracked files present`;
    }
}