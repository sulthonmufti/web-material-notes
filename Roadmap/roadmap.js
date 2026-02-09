let totalTopics = 0;
let completedTopics = 0;

function toggleTopic(element) {
    if (event.target.classList.contains('checkbox') || event.target.classList.contains('resource-link')) {
        return;
    }
    element.classList.toggle('expanded');
}

function toggleCheck(event, element) {
    event.stopPropagation();
    element.classList.toggle('checked');
    updateProgress();
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.checkbox');
    totalTopics = checkboxes.length;
    completedTopics = document.querySelectorAll('.checkbox.checked').length;
    
    const percentage = Math.round((completedTopics / totalTopics) * 100);
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressFill').textContent = percentage + '%';
    document.getElementById('completedCount').textContent = completedTopics;
    document.getElementById('totalCount').textContent = totalTopics;

    // Save progress to localStorage
    saveProgress();
}

function saveProgress() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const progress = [];
    checkboxes.forEach((checkbox, index) => {
        progress.push(checkbox.classList.contains('checked'));
    });
    localStorage.setItem('learningProgress', JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem('learningProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach((checkbox, index) => {
            if (progress[index]) {
                checkbox.classList.add('checked');
            }
        });
    }
    updateProgress();
}

// Load progress on page load
window.addEventListener('load', loadProgress);
