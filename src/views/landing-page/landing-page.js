import "./landing-page.scss";
import ToDoEntry from "../../components/to-do-entry";
import { generateCalendar, days, months } from "../../components/calendar";
import React from "react";

export default function LandingPage() {
  let current = document.querySelector(".calendar-current-dates");

  React.useEffect(() => {
    if (current) {
      generateCalendar();
    }

    // console.log(document.querySelector(".calendar-current-dates"));
  });

  return (
    <div>
      <header className="calendar-header" />
      <p className="calendar-current-dates"></p>

      <div className="main">
        <ToDoEntry />
        <div>
          <ul className="calendar-weekdays-list">
            {days.map((day) => (
              <li className="header">{day}</li>
            ))}
          </ul>
          <ul className="calendar-dates"></ul>
        </div>
      </div>
    </div>
  );
}
