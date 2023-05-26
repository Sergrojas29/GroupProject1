function saveCalories() {
    var dayOfTheWeek = dayjs().format('dddd')
    localStorage.setItem('saved', JSON.stringify(weeklyMeal))
}

var weeklyMeal = {
    monday: {
        breakfast: 10,
        lunch: 20,
        dinner: 30,
    },
    tuesday: {
        breakfast: 15,
        lunch: 25,
        dinner: 35,
    },
    wednesday: {
        breakfast: 40,
        lunch: 50,
        dinner: 60,
    },
    thursday: {
        breakfast: 40,
        lunch: 50,
        dinner: 60,
    },
    friday: {
        breakfast: 40,
        lunch: 50,
        dinner: 60,
    },
    saturday: {
        breakfast: 40,
        lunch: 50,
        dinner: 60,
    },
    sunday: {
        breakfast: 40,
        lunch: 50,
        dinner: 60,
    }
}
