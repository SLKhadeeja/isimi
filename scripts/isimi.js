const addTheme = (holidayStyle) => {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = holidayStyle

    head.appendChild(link);
}

const parse_month = (month) => {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    if (typeof(month) === "string"){
        month = months.indexOf(month);
    }

    else 
    if (typeof(month) === "number") {
        if ( (month >= 1) && (month < 13) ) {
            month = month - 1;
        }
        else {
            console.error("Invalid month")
        }
    }

    else {
        console.error("Invalid month format")
    }

    return month;
}

export function isimi(obj) {
    var d = new Date();
    var currentDay = d.getDate();
    var currentMonth = d.getMonth();

    obj.holidays.forEach(function(holiday){
        if (holiday.day == undefined) {
            switch (holiday.name) {

                case "new year":
                    holiday.day = 1
                    holiday.month = 1
                    break;

                case "valentine":
                    holiday.day = 14
                    holiday.month = 2
                    break;

                case "april fool":
                    holiday.day = 1
                    holiday.month = 4
                    break;

                case "halloween":
                    holiday.day = 31
                    holiday.month = 10
                    break;

                case "chrismas":
                    holiday.day = 25
                    holiday.month = 12
                    break;

                default:
                console.error("Invalid Config for Holiday", holiday)
                return // For failed config return
            }
        }

        // Check the date for matching 
        if (( currentDay === holiday.day ) && ( currentMonth === parse_month(holiday.month) )){
            addTheme(holiday.stylesheet)
        }
    })

}