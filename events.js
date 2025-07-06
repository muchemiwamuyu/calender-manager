const menuIcon = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const navigationMenu = document.getElementById('navigationMenus')
const appModal = document.getElementById('appModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');


menuIcon.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

navigationMenu.addEventListener('click', (e) => {
    e.preventDefault()

    const clicked = e.target.closest('a');
    if (!clicked) return;

    const label = clicked.dataset.type;

    switch (label) {
        case 'events':
            openModal('Events')
            break;
        case 'tasks':
            openModal('Tasks')
            break;
        default:
            break;
    }

    openModal(label)
})

function openModal(label) {
    modalTitle.textContent = label;
    modalContent.textContent = `You clicked on ${label}. This is where your ${label.toLowerCase()} content or UI will go.`;

    appModal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    appModal.classList.add('hidden');
})

appModal.addEventListener('click', (e) => {
  if (e.target === appModal) {
    appModal.classList.add('hidden');
  }
});

