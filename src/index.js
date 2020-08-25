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

const validateName = (holiday) => {
  const selectedHoliday = popularHolidays[holiday.name.toLowerCase()];
    if (selectedHoliday === undefined) {
        throw new Error(`Invalid Config for Name Holiday ${holiday}`);
    }
  return {
    day: selectedHoliday.day,
    month: selectedHoliday.month,
    stylesheet: holiday.stylesheet
  }
};

const validateDayMonth = (holiday) => {
  if (holiday.day > 31) {
    throw new Error('Invalid Day specified');
  }
  return holiday
};

const validateStartStopDate = (holiday, currentDay, currentMonth) => {
  const [startDate, stopDate] = [holiday.startDate, holiday.stopDate];
  if ((startDate == undefined && stopDate !== undefined) || (stopDate == undefined && startDate != undefined) ){
    throw new Error("Start and Stop Date must be specified")
  }
  if (((currentDay === startDate.day) && (currentMonth === parseMonth(startDate.month))) || (currentDay <= stopDate.day) && (currentMonth <= parseMonth(stopDate.month))) {
        return {
          day: currentDay,
          month: startDate.month,
          stylesheet: holiday.stylesheet
        }
  }
  else{
    return holiday
  }
}

export function isimi(obj) {
  const d = new Date();
  const currentDay = d.getDate();
  const currentMonth = d.getMonth();

  obj.holidays.forEach((holiday) => {
    let selectedHoliday;
    if (holiday.day !== undefined) {
      selectedHoliday = validateDayMonth(holiday)
    }

    if (holiday.startDate !== undefined || holiday.stopDate !== undefined) {
      selectedHoliday = validateStartStopDate(holiday, currentDay, currentMonth)
      
    }

    if ((selectedHoliday === undefined) && (holiday.name !== undefined)){
      selectedHoliday = validateName(holiday)
    }

    if (currentDay === selectedHoliday.day && currentMonth === parseMonth(selectedHoliday.month)) {
      addTheme(selectedHoliday.stylesheet);
    }
  });
}

export default isimi;
window.isimi = isimi;
