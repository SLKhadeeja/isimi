const addTheme = (holidayStyle) => {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = holidayStyle

    head.appendChild(link);
}


export function isimi(obj) {
    var d = new Date();
    var currentDay = d.getDate();
    var currentMonth = d.getMonth();

    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    for( var i=0; i<obj.holidays.length; i++){

        var name = obj.holidays[i].name;

        if (obj.holidays[i].day === undefined){
            switch (name) {
                case "new year":
                    {
                        if ( ( currentDay === 1 ) && ( currentMonth === monthNames.indexOf("january") ) ){
                            addTheme(obj.holidays[i].stylesheet);
                        }
                    }
                    break;

                case "valentine":
                    {
                        if ( ( currentDay === 14 ) && ( currentMonth === monthNames.indexOf("february") ) ){
                            addTheme(obj.holidays[i].stylesheet);
                        }
                    }
                    break;

                case "april fool":
                    {
                        if ( ( currentDay === 1 ) && ( currentMonth === monthNames.indexOf("april") ) ){
                            addTheme(obj.holidays[i].stylesheet);
                        }
                    }
                    break;

                case "halloween":
                    {
                        if ( ( currentDay === 31 ) && ( currentMonth === monthNames.indexOf("october") ) ){
                            addTheme(obj.holidays[i].stylesheet);
                        }
                    }
                    break;

                case "chrismas":
                    {
                        if ( ( currentDay === 25 ) && ( currentMonth === monthNames.indexOf("december") ) ){
                            addTheme(obj.holidays[i].stylesheet);
                        }
                    }
                    break;
                
                default:
                    return
            }
        }

        else {
            if ( ( currentDay === obj.holidays[i].day ) && ( currentMonth === monthNames.indexOf(obj.holidays[i].month) ) ){
                addTheme(obj.holidays[i].stylesheet);
            }
        }
    }
}