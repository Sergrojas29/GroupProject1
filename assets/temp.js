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


function saveMealData(mealTitle , weekDayNum) {
    var Choosemeal = document.querySelectorAll('.mealsContain')

    Choosemeal[weekDayNum].children[1].children[0].innerText = Math.round(saveWeekData['day' + weekDayNum][mealTitle + 'Calories'])
    // return Math.round(saveWeekData['day' + weekDayNum][mealTitle + 'Calories'])
}

function sumthenWrite(key) {
    var ChooseDay = document.querySelectorAll('.dayMealtotal')
    for (let i = 0; i < 7; i++) {
        ChooseDay[i].innerText = (saveMealData("breakfast", i) + saveMealData("lunch", i) + saveMealData("dinner", i))
    }
}



function CalculateTotalNutritionInfo(data) {
    resetNutritionInfo(fullNutritionInfo)
    for (let i = 0; i < data.items.length; i++) {
        for (const [key, value] of Object.entries(data.items[i])) {
            if (typeof (value) == "string") {
                fullNutritionInfo.name += value
                fullNutritionInfo.name += ' '
            }
            else {
                fullNutritionInfo[key] += value
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

function resetNutritionInfo(object) {
    for (const [key, value] of Object.entries(object)) {
        if (typeof (value) == "string") {
            object[key] = ''

        }
        else {
            object[key] = 0
        }
    }
}