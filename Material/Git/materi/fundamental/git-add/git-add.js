function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function stageFile(id, fileName) {
    const fileEl = document.getElementById(id);
    const stagingArea = document.getElementById('staging-area');
    
    if (fileEl.parentElement.id !== 'staging-area') {
        fileEl.style.borderColor = '#28a745';
        fileEl.style.backgroundColor = '#f0fff4';
        stagingArea.appendChild(fileEl);
    }
}

function resetStaging() {
    location.reload(); // Cara tercepat untuk mereset simulasi UI
}