const changeTheme = (holidayStyle) => {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = holidayStyle

    head.appendChild(link);
}

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
var d = new Date()
var day = d.getDate() /*31*/
var month = months[d.getMonth()] /*'october'*/

switch (month){
    case 'december':
        {
            if (day === 25){
                changeTheme('styles/chrismas.css')
            }
        }
    break;

    case 'october':
        {
            if (day === 31){
                changeTheme('styles/halloween.css')
                console.log(month)
            }
        }
    default:
        
}
