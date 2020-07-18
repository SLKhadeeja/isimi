import popularHolidays from './popular_holidays';

const addTheme = (holidayStyle) => {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = holidayStyle;

  head.appendChild(link);
};

const parseMonth = (month) => {
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  if (typeof month === 'string') {
    month = months.indexOf(month);
  } else if (typeof month === 'number') {
    if (month >= 1 && month < 13) {
      month -= 1;
    } else {
      console.error('Invalid month');
    }
  } else {
    console.error('Invalid month format');
  }

  return month;
};

export function isimi(obj) {
  const d = new Date();
  const currentDay = d.getDate();
  const currentMonth = d.getMonth();

  obj.holidays.forEach((holiday) => {
    if (holiday.day === undefined || holiday.month === undefined) {
      const selectedHoliday = popularHolidays[holiday.name.toLowerCase()];
      if (selectedHoliday === undefined) {
        throw new Error(`Invalid Config for Holiday ${holiday}`);
      }
      holiday = selectedHoliday;
    }

    // Check the date for matching
    if (currentDay === holiday.day && currentMonth === parseMonth(holiday.month)) {
      addTheme(holiday.stylesheet);
    }
  });
}

export default isimi;
window.isimi = isimi;