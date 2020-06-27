const holidays = [];
const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

const addTheme = (holidayStyle) => {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = holidayStyle

    head.appendChild(link);
}

export function addHoliday(month, day, path) {
    var holiday = {};
    holiday.month = monthNames.indexOf(month);
    holiday.day = day;
    holiday.path = path;

    holidays.append(holiday);
}


export function isimi() {
    var d = new Date();
    var currentDay = 31;
    var currentMonth = 'october';
    var holidayMonths = [];
    var holidayDays = [];

    for( i=0; i<holidays.length; i++){
        holidayMonths = holidays[i].month;
        holidayDays = holidays[i].day;
    }

    if (holidayMonths.includes(currentMonth)) {
        if(holidayDays.includes(currentDay)) {
            var path = holidays[holidayMonths.indexOf(currentMonth)].path;
            addTheme(path);
        }
    }
}
