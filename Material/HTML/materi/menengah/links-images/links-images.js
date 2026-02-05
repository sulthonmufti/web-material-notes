function changePage() {
    const selectedPage = document.getElementById('pageSelect').value;
    const pages = document.querySelectorAll('.materi-content');
    
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(selectedPage).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}