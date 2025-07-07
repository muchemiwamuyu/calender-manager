const menuIcon = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const navigationMenu = document.getElementById('navigationMenus')
const appModal = document.getElementById('appModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const eventForm = document.getElementById('eventForm');
const tasksForm = document.getElementById('taskForm')


menuIcon.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

navigationMenu.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target.closest('a');
  if (!clicked) return;

  const label = clicked.dataset.type;

  // Hide both forms first
  eventForm.classList.add('hidden');
  tasksForm.classList.add('hidden');

  // Open modal with correct label
  openModal(label);
});

function openModal(label) {
  appModal.classList.remove('hidden');

  // Show the correct form based on label
  if (label === 'events') {
    eventForm.classList.remove('hidden');
  } else if (label === 'tasks') {
    tasksForm.classList.remove('hidden');
  }
}

closeModal.addEventListener('click', () => {
    appModal.classList.add('hidden');
})

appModal.addEventListener('click', (e) => {
    if (e.target === appModal) {
        appModal.classList.add('hidden');
    }
});

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('eventTitle').value.trim();
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const desc = document.getElementById('eventDesc').value.trim();

    if (!title || !date) {
    alert('Title and Date are required');
    return;
  }

  // You can replace this with actual logic to store the event
  console.log({
    title,
    date,
    time,
    desc
  });

  alert(`Event "${title}" created for ${date} at ${time || 'unspecified time'}`);

  appModal.classList.add('hidden');
  eventForm.reset();
})

