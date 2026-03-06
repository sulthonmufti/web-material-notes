function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function animateSync(action) {
    const path = document.getElementById('dataPath');
    const status = document.getElementById('syncStatus');
    
    if (action === 'push') {
        path.innerHTML = ">>>>>>";
        path.style.color = "#F05032";
        status.innerHTML = "$ git push origin main<br>Enumerating objects: 5, done.<br>Writing objects: 100% (3/3), 320 bytes...<br><span style='color: #7ee787;'>To https://github.com/user/repo.git<br>   a1b2c3d..e5f6g7h  main -> main</span>";
    } else {
        path.innerHTML = "<<<<<<";
        path.style.color = "#0366d6";
        status.innerHTML = "$ git pull origin main<br>remote: Counting objects: 10, done.<br>Unpacking objects: 100% (6/6), done.<br><span style='color: #7ee787;'>Updating a1b2c3d..z9y8x7w<br>Fast-forward<br> index.html | 2 +-<br> 1 file changed, 1 insertion(+), 1 deletion(-)</span>";
    }
    
    // Reset path color after animation
    setTimeout(() => {
        path.style.color = "#cbd5e0";
    }, 2000);
}