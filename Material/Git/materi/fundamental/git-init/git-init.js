function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function handleTerminal(event) {
    if (event.key === "Enter") {
        const input = document.getElementById('terminalInput').value.trim();
        const output = document.getElementById('terminalOutput');
        
        if (input === "git init") {
            output.innerHTML = `<span style="color: #7ee787;">Initialized empty Git repository in C:/Projects/my-app/.git/</span>`;
        } else if (input === "") {
            output.innerHTML = "";
        } else {
            output.innerHTML = `<span style="color: #ff7b72;">Command '${input}' not recognized. Try 'git init'</span>`;
        }
        
        document.getElementById('terminalInput').value = "";
    }
}