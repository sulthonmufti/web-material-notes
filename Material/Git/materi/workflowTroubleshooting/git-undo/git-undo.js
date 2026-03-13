function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function runUndo(type) {
    const display = document.getElementById('undoDisplay');
    
    if (type === 'restore') {
        display.innerHTML = `
        <span style="color: #8b949e;">$ git restore index.html</span><br>
        <span style="color: #7ee787;">✓ Perubahan dibuang. File kembali ke kondisi commit terakhir.</span>`;
    } else if (type === 'reset') {
        display.innerHTML = `
        <span style="color: #8b949e;">$ git reset --soft HEAD~1</span><br>
        <span style="color: #7ee787;">✓ Commit terakhir dihapus. Kode Anda sekarang ada di 'Staging Area'.</span>`;
    }
}