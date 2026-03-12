function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function resolve(choice) {
    const editor = document.getElementById('conflictEditor');
    const status = document.getElementById('resolveStatus');
    const myCode = document.getElementById('myCode').innerText;
    const theirCode = document.getElementById('theirCode').innerText;

    if (choice === 'me') {
        editor.innerHTML = `<div style="padding: 20px; color: #a5d6ff;">${myCode}</div>`;
        status.innerHTML = "✅ Anda memilih 'Current Change'. Sekarang jalankan 'git add'!";
        status.style.color = "#28a745";
    } else {
        editor.innerHTML = `<div style="padding: 20px; color: #7ee787;">${theirCode}</div>`;
        status.innerHTML = "✅ Anda memilih 'Incoming Change'. Pastikan kodenya tidak merusak fitur Anda!";
        status.style.color = "#0366d6";
    }
}

function resetLab() {
    const editor = document.getElementById('conflictEditor');
    const status = document.getElementById('resolveStatus');
    
    editor.innerHTML = `
        <div class="conflict-line head-side" onclick="resolve('me')">&lt;&lt;&lt;&lt;&lt;&lt;&lt; Current Change (Anda)</div>
        <div class="code-line" id="myCode">var name = "Sulthon";</div>
        <div class="conflict-line divider">=======</div>
        <div class="code-line" id="theirCode">var name = "Mufti";</div>
        <div class="conflict-line incoming-side" onclick="resolve('them')">&gt;&gt;&gt;&gt;&gt;&gt;&gt; Incoming Change (Rekan)</div>
    `;
    status.innerHTML = "";
}