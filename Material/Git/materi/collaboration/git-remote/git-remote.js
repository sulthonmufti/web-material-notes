function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function runStep(step) {
    const display = document.getElementById('sim-display');
    
    switch(step) {
        case 1:
            display.innerHTML = `
            <span style="color: #8b949e;">$ git remote add origin https://github.com/company/app.git</span><br>
            <span style="color: #8b949e;">$ git remote -v</span><br>
            origin  https://github.com/company/app.git (fetch)<br>
            origin  https://github.com/company/app.git (push)`;
            break;
        case 2:
            display.innerHTML = `
            <span style="color: #8b949e;">$ git remote set-url origin https://gitlab.com/new-path/app.git</span><br>
            <span style="color: #8b949e;">$ git remote -v</span><br>
            origin  https://gitlab.com/new-path/app.git (fetch)<br>
            origin  https://gitlab.com/new-path/app.git (push)`;
            break;
        case 3:
            display.innerHTML = `$ git remote -v<br>(kosong)`;
            break;
    }
}