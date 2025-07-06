const datesGrid = document.getElementById('dates')

let viewDate = new Date(); // Basis for calendar rendering

function getTimeZoneToday(timeZone) {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  const parts = formatter.formatToParts(now);
  const day = +parts.find(p => p.type === 'day').value;
  const month = +parts.find(p => p.type === 'month').value - 1;
  const year = +parts.find(p => p.type === 'year').value;

  return { day, month, year };
}

function renderCalendar() {
  const selectedTimezone = document.getElementById('timezone').value;
  const today = getTimeZoneToday(selectedTimezone);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  datesGrid.innerHTML = '';

  for (let i = firstDay; i > 0; i--) {
    const div = document.createElement('div');
    div.textContent = daysInPrevMonth - i + 1;
    div.className = 'text-gray-400 p-2 border';
    datesGrid.appendChild(div);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const div = document.createElement('div');
    div.textContent = i;

    let baseClasses = 'p-2 border bg-white hover:bg-blue-100 transition cursor-pointer';

    if (
      today.year === year &&
      today.month === month &&
      i === today.day
    ) {
      baseClasses += ' bg-blue-600 text-white font-bold';
    }

    div.className = baseClasses;
    datesGrid.appendChild(div);
  }

  const totalCells = firstDay + daysInMonth;
  const remaining = 42 - totalCells;

  for (let i = 1; i <= remaining; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    div.className = 'text-gray-400 p-2 border';
    datesGrid.appendChild(div);
  }
}

document.getElementById('timezone').addEventListener('change', () => {
  renderCalendar();
});

renderCalendar();
