function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function simulate(type) {
    const output = document.getElementById('terminal-sim');
    if (type === 'status') {
        output.innerHTML = `On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        <span style="color: #7ee787;">new file:   index.html</span>

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        <span style="color: #ff7b72;">modified:   style.css</span>

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        <span style="color: #ff7b72;">login-fix.js</span>`;
    } else {
        output.innerHTML = `<span style="color: #d29922;">commit a1b2c3d4e5f6g7h8i9j0</span>
Author: Muhammad Sulthon Mufti &lt;mufti@dev.com&gt;
Date:   Mon Mar 2 10:00:00 2026 +0700

    feat: menambahkan sistem validasi login

<span style="color: #d29922;">commit z9y8x7w6v5u4t3s2r1q0</span>
Author: Muhammad Sulthon Mufti &lt;mufti@dev.com&gt;
Date:   Sun Mar 1 15:30:00 2026 +0700

    initial commit: setup struktur folder proyek`;
    }
}