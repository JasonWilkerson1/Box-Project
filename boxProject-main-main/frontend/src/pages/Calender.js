import React, { useState } from 'react';
import './Calender.css'; // Ensure you have the correct CSS file name

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const specialDates = [
  { date: new Date(2023, 0, 1), eventName: "New Year's Day" },
  { date: new Date(2023, 1, 14), eventName: "Valentine's Day" },
  { date: new Date(2023, 9, 31), eventName: "Deadline Holiday Box Project Sponsorship" },
  { date: new Date(2023, 10, 28), eventName: "GivingTuesday" },
  // Add more special dates here
];

function News() {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [showMonthList, setShowMonthList] = useState(false);

  const daysOfMonth = [
    31, getFebDays(currentYear), 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
  ];

  const isSpecialDate = (year, month, day) => {
    const currentDate = new Date(year, month, day);
    return specialDates.find(specialDate => 
      currentDate.toDateString() === specialDate.date.toDateString());
  };

  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth);
    const days = [];
  
    for (let i = 0; i <= daysOfMonth[currentMonth] + firstDay.getDay() - 1; i++) {
      if (i >= firstDay.getDay()) {
        const day = i - firstDay.getDay() + 1;
        const isCurrentDate =
          day === currentDate.getDate() &&
          currentYear === currentDate.getFullYear() &&
          currentMonth === currentDate.getMonth();

        const specialDateInfo = isSpecialDate(currentYear, currentMonth, day);
  
        days.push(
          <div className={`${isCurrentDate ? 'current-date' : ''} ${specialDateInfo ? 'special-date' : ''}`} key={i}>
            {day}
            {specialDateInfo && <div className="event-label">{specialDateInfo.eventName}</div>}
          </div>
        );
      } else {
        days.push(<div key={i}></div>);
      }
    }
  
    return days;
  };

  const handleMonthClick = (monthIndex) => {
    setCurrentMonth(monthIndex);
    setShowMonthList(false);
  };

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };
  return (
    <div className="container">
      <div className="calendar">
        <div className="calendar-header">
          <span className="month-picker" id="month-picker" onClick={() => setShowMonthList(!showMonthList)}>
            {monthNames[currentMonth]}
          </span>
          <div className="year-picker">
            <span className="year-change" id="pre-year" onClick={handlePrevYear}>
              <pre>{'<'}</pre>
            </span>
            <span id="year">{currentYear}</span>
            <span className="year-change" id="next-year" onClick={handleNextYear}>
              <pre>{'>'}</pre>
            </span>
          </div>
        </div>
        <div className="day-names">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-days">
          {generateCalendarDays()}
        </div>
        
        {/* ... other component code ... */}

        <div className={`month-list ${showMonthList ? 'show' : 'hide'}`}>
          {monthNames.map((month, index) => (
            <div key={index} onClick={() => handleMonthClick(index)}>
              <div>{month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;