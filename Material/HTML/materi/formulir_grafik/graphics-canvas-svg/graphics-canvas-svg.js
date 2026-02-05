function changePage() {
    const selectedPage = document.getElementById('pageSelect').value;
    const pages = document.querySelectorAll('.materi-content');
    
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(selectedPage).classList.add('active');
    
    // Re-run canvas script if active
    if(selectedPage === 'canvas-page') {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#9b59b6";
        ctx.fillRect(20, 20, 150, 60);
        ctx.font = "14px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Halo Canvas!", 50, 55);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init canvas on load if it's the default
window.onload = function() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#9b59b6";
        ctx.fillRect(20, 20, 150, 60);
}
