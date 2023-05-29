function dayOftheWeek() {
    // var today = dayjs().set('hour', 18).set('minute', 55)
    var day = dayjs().day()
    var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var Weekday = document.querySelector('#MainDayofWeek')
    Weekday.innerText = weekArray[day]
    return day
}
dayOftheWeek()





var fullNutritionInfo = {
    name: "",
    calories: 0,
    serving_size_g: 0,
    fat_total_g: 0,
    fat_saturated_g: 0,
    protein_g: 0,
    sodium_mg: 0,
    potassium_mg: 0,
    cholesterol_mg: 0,
    carbohydrates_total_g: 0,
    fiber_g: 0,
    sugar_g: 0,
}


var saveWeekData = {
    day0: {
        breakfastCalories: 90,
        lunchCalories: 60,
        dinnerCalories: 30,
    },
    day1: {
        breakfastCalories: 190,
        lunchCalories: 150,
        dinnerCalories: 130,
    },
    day2: {
        breakfastCalories: 250,
        lunchCalories: 210,
        dinnerCalories: 290,
    },
    day3: {
        breakfastCalories: 300,
        lunchCalories: 310,
        dinnerCalories: 350,
    },
    day4: {
        breakfastCalories: 420,
        lunchCalories: 490,
        dinnerCalories: 430,
    },
    day5: {
        breakfastCalories: 410,
        lunchCalories: 950,
        dinnerCalories: 410,
    },
    day6: {
        breakfastCalories: 447.8,
        lunchCalories: 658.55,
        dinnerCalories: 875.5,
    },
}

function saveMealData(mealTitle, weekDayNum) {
    var Choosemeal = document.querySelectorAll("#" + mealTitle)
    Choosemeal[weekDayNum].children[1].children[0].innerText = Math.round(saveWeekData['day' + weekDayNum][mealTitle + 'Calories'])
    return Math.round(saveWeekData['day' + weekDayNum][mealTitle + 'Calories'])
}

function sumthenWrite() {
    var ChooseDay = document.querySelectorAll('.dayMealtotal')
    for (let i = 0; i < 7; i++) {
        ChooseDay[i].innerText = (saveMealData("breakfast", i) + saveMealData("lunch", i) + saveMealData("dinner", i))
    }
}
//! left of here
function addMealtoObject(mealTitle , weekDayNum){
    saveWeekData['day'+ weekDayNum][mealTitle + 'Calories'] = 6300
    sumthenWrite()
}

addMealtoObject('breakfast',0)


function CalculateTotalNutritionInfo(data) {
    for (let i = 0; i < data.items.length; i++) {
        for (const [key, value] of Object.entries(data.items[i])) {

            if (typeof (value) == "string") {
                fullNutritionInfo.name += value
                fullNutritionInfo.name += ' '
            }
            else {
                fullNutritionInfo[key] += value
                // console.log(`${key}: ${value}`);
            }

        }
    }
    nutritionInfo(fullNutritionInfo)
}

function nutritionInfo(object) {
    for (const [key, value] of Object.entries(object)) {
        var idFinder = document.getElementById(key)
        if (typeof (value) == "string") {
            idFinder.textContent = value

        }
        else {
            idFinder.textContent = Math.round(value * 10) / 10
        }
    }
}