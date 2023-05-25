function dayOftheWeek() {
    // var today = dayjs().set('hour', 18).set('minute', 55)
    var day = dayjs().day()
    var weekArray = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var Weekday = document.querySelector('#MainDayofWeek')    
    Weekday.innerText = weekArray[day]
    return  day
 }
 dayOftheWeek()