const datesGrid = document.getElementById('dates')


let date = new Date()


function renderCalendar() {
    const year = date.getFullYear()
    const month = date.getMonth()

    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const daysInPrevMonth = new Date(year, month, 0).getDate()
    const isCurrentMonth = date.getFullYear() === year && date.getMonth() === month;

    datesGrid.innerHTML = '' // Clear previous content

    // 1. Add previous month's trailing days
    for (let i = firstDay; i > 0; i--) {
        const div = document.createElement('div')
        div.textContent = daysInPrevMonth - i + 1
        div.className = 'text-gray-400 p-2 border'
        datesGrid.appendChild(div)
    }

    // 2. Add current month days
    for (let i = 1; i <= daysInMonth; i++) {
        const div = document.createElement('div')
        div.textContent = i
         let baseClasses = 'p-2 border bg-white hover:bg-blue-100 transition cursor-pointer';

        //  highlight current date
        if(isCurrentMonth && i === date.getDate()) {
            baseClasses += "cursor-pointer bg-blue-500 text-white font-bold";
        }

        div.className = baseClasses
        datesGrid.appendChild(div)
    }


    // 3. Add next month’s leading days to fill the last row
    const totalCells = firstDay + daysInMonth
    const remaining = 42 - totalCells // To keep 6 full rows

    for (let i = 1; i <= remaining; i++) {
        const div = document.createElement('div')
        div.textContent = i
        div.className = 'text-gray-400 p-2 border'
        datesGrid.appendChild(div)
    }
}

renderCalendar()
