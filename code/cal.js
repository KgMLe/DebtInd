const currentYear = new Date().getFullYear();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];
const calendar = document.getElementById("calendar");
const getAllDays = (year) => {
  const firstDay = new Date(`January 1 ${year}`);
  const lastDay = new Date(`December 31 ${year}`);

  const days = [firstDay];

  let lastDayInArray = firstDay;

  while (lastDayInArray.getTime() !== lastDay.getTime()) {
    days.push(addDays(lastDayInArray, 1));
    lastDayInArray = days[days.length - 1];
  }

  return days;
};

const dates = getAllDays(currentYear);

let monthsHTML = "";

months.forEach((month, idx) => {
  monthsHTML += `<div class="months month_${idx}">
        <h3>${month}</h3>
        <div class="week_days_container">
            ${weekDays
              .map((day) => `<div class="week_days">${day}</div>`)
              .join("")}
        </div>
        <div class="days_container"></div>
    </div>`;
});

calendar.innerHTML = monthsHTML;

dates.forEach((date) => {
  const month = date.getMonth();
  const monthEl = document.querySelector(`.month_${month} .days_container`);

  if (date.getDate() === 1 && date.getDay() !== 0) {
    for (let i = 0; i < date.getDay(); i++) {
      const emptySpot = createEmptySpot();

      monthEl.appendChild(emptySpot);
    }
  }

  const dateEl = createDateEl(date);

  monthEl.appendChild(dateEl);
});

function createDateEl(date) {
  const day = date.getDate();
  const dateEl = document.createElement("div");
  dateEl.classList.add("days");
  dateEl.innerHTML = `<span class="circle">${day}</span>`;

  return dateEl;
}

function createEmptySpot() {
  const emptyEl = document.createElement("div");
  emptyEl.classList.add("days");

  return emptyEl;
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
