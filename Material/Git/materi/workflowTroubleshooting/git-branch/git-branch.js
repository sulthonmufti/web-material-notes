function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

let branches = ["main"];

function addBranch() {
    if (branches.length >= 5) {
        alert("Terlalu banyak dimensi! Selesaikan dulu satu branch.");
        return;
    }
    
    const name = "feature-" + branches.length;
    branches.push(name);
    
    // Update Map
    const map = document.getElementById('branchMap');
    const newDot = document.createElement('div');
    newDot.className = "dot";
    newDot.title = name;
    map.appendChild(newDot);
    
    // Update Terminal
    updateTerminal();
}

function updateTerminal() {
    const term = document.getElementById('branchTerminal');
    let content = "$ git branch<br>";
    branches.forEach((b, i) => {
        if (i === 0) content += `<span style="color: #7ee787;">* main</span><br>`;
        else content += `  ${b}<br>`;
    });
    term.innerHTML = content;
}

function resetLab() {
    branches = ["main"];
    const map = document.getElementById('branchMap');
    map.innerHTML = '<div class="dot active" title="main"></div>';
    updateTerminal();
}