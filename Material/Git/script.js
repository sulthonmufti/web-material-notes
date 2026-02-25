const materiGitData = {
    // Kategori: CONCEPTUAL & PREPARATION (Wajib: Pahami logika sebelum sintaks)
    conceptual: [
        { nama: "What is Git? (Version Control System)", file: "git-concept" },
        { nama: "Git Installation & Environment Setup", file: "git-install" },
        { nama: "How Git Works (Snapshot vs Delta)", file: "git-how-it-works" },
        { nama: "Git Architecture (Working Dir, Staging, Repository)", file: "git-architecture" },
        { nama: "Common Git Issues & Best Practices", file: "git-issues-intro" }
    ],

    // Kategori: FUNDAMENTAL (Praktik Dasar di Lokal)
    fundamental: [
        { nama: "Git Config (User & Email)", file: "git-config" },
        { nama: "Git Init (Starting a Project)", file: "git-init" },
        { nama: "Git Add (Staging Area)", file: "git-add" },
        { nama: "Git Commit (History Point)", file: "git-commit" },
        { nama: "Git Status & Log (Tracking Changes)", file: "git-status-log" }
    ],

    // Kategori: COLLABORATION (GitHub & Remote)
    collaboration: [
        { nama: "GitHub/GitLab/Bitbucket Overview", file: "remote-overview" },
        { nama: "Git Remote (Connect to Cloud)", file: "git-remote" },
        { nama: "Git Push & Pull (Syncing Data)", file: "git-push-pull" },
        { nama: "Git Clone (Downloading Projects)", file: "git-clone" },
        { nama: "SSH vs HTTPS Authentication", file: "git-auth" }
    ],

    // Kategori: WORKFLOW & TROUBLESHOOTING (Lanjutan & Solusi Masalah)
    workflowTroubleshooting: [
        { nama: "Branching (Parallel Development)", file: "git-branch" },
        { nama: "Merging & Conflict Resolution", file: "git-merge-conflict" },
        { nama: "Undo Mistakes (Revert, Reset, Amend)", file: "git-undo" },
        { nama: "Git .gitignore (Managing Files)", file: "git-ignore" },
        { nama: "Git Stash (Saving Work Silently)", file: "git-stash" }
    ]
};



const kategoriSelect = document.getElementById('kategori');
const materiSelect = document.getElementById('materi');
const belajarButton = document.getElementById('belajarButton');

// Fungsi yang dipanggil saat Kategori diubah
function updateMateri() {
    const kategori = kategoriSelect.value;

    // 1. Reset dropdown materi dan status tombol
    materiSelect.innerHTML = '<option value="">-- Pilih Materi --</option>';
    materiSelect.disabled = true;
    belajarButton.disabled = true;

    // 2. Isi dropdown berdasarkan kategori yang dipilih
    if (kategori && materiGitData[kategori]) {
        const materiList = materiGitData[kategori];

        materiList.forEach(item => {
            const option = document.createElement('option');
            // value option akan menjadi nama file
            option.value = item.file; 
            option.textContent = item.nama;
            materiSelect.appendChild(option);
        });

        materiSelect.disabled = false;
        
        // Cek apakah ada materi yang dipilih saat dropdown materi diubah
        materiSelect.onchange = () => {
            belajarButton.disabled = !materiSelect.value;
        };
    }
}

// Fungsi yang dipanggil saat tombol "Belajar" diklik
function goToMateri() {
    const kategori = kategoriSelect.value;
    const materiFile = materiSelect.value;

    if (kategori && materiFile) {
        // Logika pembuatan URL: materi/kategori/namafile.html
        const url = `materi/${kategori}/${materiFile}/${materiFile}.html`;
        
        // Pindah ke halaman materi yang dipilih
        window.location.href = url;
    } else {
        alert("Mohon pilih kategori dan nama materi.");
    }
}