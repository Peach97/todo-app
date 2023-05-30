export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const day = document.querySelector(".calendar-dates");
export const currDate = document.querySelector(".calendar-current-dates");
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// let firstDay = (new Date(year, month)).getDay();
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

export const generateCalendar = () => {
  let firstDay = new Date(year, month, 1).getDay();
  let lastDate = new Date(year, month + 1, 0).getDate();
  let dayend = new Date(year, month, lastDate).getDay();
  let monthlastdate = new Date(year, month, 0).getDate();

  let lit = "";

  for (let i = firstDay; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    // Check if the current date is today
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  currDate.innerHTML = `${months[month]} ${year}`;
  console.log(currDate);

  day.innerHTML = lit;
};
