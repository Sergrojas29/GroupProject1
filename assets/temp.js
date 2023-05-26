function dayOftheWeek() {
    // var today = dayjs().set('hour', 18).set('minute', 55)
    var day = dayjs().day()
    var weekArray = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var Weekday = document.querySelector('#MainDayofWeek')    
    Weekday.innerText = weekArray[day]
    return  day
 }
 dayOftheWeek()


function nutritionInfo(object){
    for (const [key, value] of Object.entries(items1)) {
        const nutritionContainer = document.querySelector('.nutritionContainer')
        var divEl = document.createElement('div')
        divEl.setAttribute('id', key )
        nutritionContainer.appendChild(divEl)
        divEl.textContent = value
        console.log(`${key}: ${value}`);
    }
    const removeName = document.querySelector('#name')

    removeName.remove()
}

// nutritionInfo(items1)

