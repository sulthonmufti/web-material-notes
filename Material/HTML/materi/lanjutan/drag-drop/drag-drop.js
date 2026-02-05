function changePage() {
    const selectedPage = document.getElementById('pageSelect').value;
    const pages = document.querySelectorAll('.materi-content');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(selectedPage).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Drag & Drop Logic
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
