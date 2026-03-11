function toggleSegment(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
  const span = element.querySelector("span");
  span.innerText = parent.classList.contains("active") ? "-" : "+";
}

function simulateAuthTest() {
  const term = document.getElementById("authTerminal");
  term.innerHTML = `<span style="color: #8b949e;">$ ssh -T git@github.com</span><br>`;

  setTimeout(() => {
    term.innerHTML += `Hi user-pro! You've successfully authenticated, but GitHub does not provide shell access.<br>`;
    term.innerHTML += `<span style="color: #7ee787;">✓ Koneksi SSH Aktif dan Aman!</span>`;
  }, 1000);
}

//SSH: Autentikasi Tanpa Password
(function () {
  const sshInput = document.getElementById("sshInput");
  const sshOutput = document.getElementById("sshOutput");
  let publicKey =
    "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHpPNM4F4kKamuContohKey email@kamu.com";

  sshInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const cmd = sshInput.value.trim();
      let response = "";
      if (cmd.startsWith("ssh-keygen")) {
        response = `<span style="color: #7ee787;">✓ Kunci SSH berhasil dibuat dan disimpan di ~/.ssh/id_ed25519</span>`;
      } else if (cmd === "cat ~/.ssh/id_ed25519.pub") {
        response = '<span style="color:#58a6ff">' + publicKey + "</span>";
      } else if (cmd) {
        response = `<span style="color:#f7786d;">Perintah tidak dikenali, coba "ssh-keygen ..." atau "cat ~/.ssh/id_ed25519.pub"</span>`;
      }
      sshOutput.innerHTML += `<div><span style="color:#8b949e;">$</span> ${cmd}</div>${response ? `<div>${response}</div>` : ""}`;
      sshInput.value = "";
      sshOutput.scrollTop = sshOutput.scrollHeight;
    }
  });
})();

// Interaktif terminal GCM
(function () {
  const gcmInput = document.getElementById("gcmInput");
  const gcmOutput = document.getElementById("gcmOutput");
  gcmInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const cmd = gcmInput.value.trim();
      let response = "";
      if (cmd === "git config --global credential.helper manager") {
        response = `<span style="color:#7ee787;">✓ Git Credential Manager telah diaktifkan! Kredensial Anda kini disimpan aman.</span>`;
      } else if (cmd) {
        response = `<span style="color:#f7786d;">Perintah tidak dikenali, coba: git config --global credential.helper manager</span>`;
      }
      gcmOutput.innerHTML += `<div><span style="color:#8b949e;">$</span> ${cmd}</div>${response ? `<div>${response}</div>` : ""}`;
      gcmInput.value = "";
      gcmOutput.scrollTop = gcmOutput.scrollHeight;
    }
  });
})();
