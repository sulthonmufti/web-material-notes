function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function addSimulatedCommit() {
    const input = document.getElementById('commitMsg');
    const log = document.getElementById('commitLog');
    
    if (input.value.trim() === "") {
        alert("Pesan commit tidak boleh kosong!");
        return;
    }

    // Generate random 7-char hash
    const randomHash = Math.random().toString(36).substring(2, 9);
    
    // Create new commit item
    const commitDiv = document.createElement('div');
    commitDiv.className = 'commit-item';
    commitDiv.style.animation = "fadeIn 0.5s ease";
    commitDiv.innerHTML = `<span class="hash">${randomHash}</span> <span class="msg">${input.value}</span>`;
    
    // Insert at top
    log.insertBefore(commitDiv, log.firstChild);
    
    // Clear input
    input.value = "";
}