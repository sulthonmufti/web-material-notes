function toggleSegment(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
    const span = element.querySelector("span");
    span.innerText = parent.classList.contains("active") ? "-" : "+";
}

// Demo Distributed VCS
function simulasiDistributed() {
    const hasil = document.getElementById('hasil-vcs');
    hasil.innerHTML = "<strong>Status:</strong> Server mati, tapi Dev A dan Dev B tetap bisa bekerja dan melihat seluruh riwayat proyek karena mereka punya salinan 'Local Database' yang lengkap. Inilah kekuatan <em>Distributed</em>.";
    hasil.style.color = "#27ae60";
}

// Demo Git Flow
let currentStep = 0;
function nextFlowStep() {
    const steps = ['step-work', 'step-stage', 'step-repo'];
    if (currentStep < steps.length - 1) {
        document.getElementById(steps[currentStep]).classList.remove('active-flow');
        currentStep++;
        document.getElementById(steps[currentStep]).classList.add('active-flow');
    }
}

function resetFlow() {
    const steps = ['step-work', 'step-stage', 'step-repo'];
    steps.forEach(s => document.getElementById(s).classList.remove('active-flow'));
    currentStep = 0;
    document.getElementById(steps[0]).classList.add('active-flow');
}

// Demo Branching
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('branch-visual');
    if(container) {
        container.innerHTML = '<div class="branch-line main-repo">● Main Branch: Produksi (Live)</div>';
    }
});

function buatFitur() {
    const container = document.getElementById('branch-visual');
    const branch = document.createElement('div');
    branch.className = "branch-line fitur";
    branch.innerText = "🌿 Branch Fitur: Pembayaran (Sedang dikerjakan)";
    container.appendChild(branch);
}

function buatBugfix() {
    const container = document.getElementById('branch-visual');
    const branch = document.createElement('div');
    branch.className = "branch-line bugfix";
    branch.innerText = "🐞 Branch Bugfix: Login (Urgent!)";
    container.appendChild(branch);
}