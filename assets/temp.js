sumthenWrite()


//! Code to write weeklyMeal to HTML
function saveMealData(mealTitle , weekDayNum) {
    const Choosemeal = document.querySelectorAll(`#${mealTitle}`)       
    Choosemeal[weekDayNum].children[1].children[0].innerText = Math.round(weeklyMeal['day' + weekDayNum][mealTitle])
    return Math.round(weeklyMeal['day' + weekDayNum][mealTitle])
}


function sumthenWrite() {
    var ChooseDay = document.querySelectorAll('.dayMealtotal')
    for (let i = 0; i < 7; i++) {
        var totalCals = 0
        totalCals+= saveMealData("breakfast", i) + saveMealData("lunch", i) +saveMealData("dinner", i)
        ChooseDay[i].innerText = `${totalCals} Cal`
    }
}



//! code for nutrition Info Section

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
    pieChange()
    setChartData()
    sumthenWrite()
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

//! pieChart function
function pieChange(){
    const pieChart = document.querySelector('#pieRepresintation')
    const calfromInput = Number(document.querySelector('#calories').innerText)

    var sizeForpie = (calfromInput / 2000) * 100
    pieChart.setAttribute('style',`background-image: conic-gradient(var(--headerColorSecond) ${sizeForpie}%, rgba(255, 255, 255, 0) 1%, rgba(0, 0, 0, 0));`)
}

//! Code for graph
setChartData()
function setChartData(){
    clearchart()
    createchart()
    var ChooseDay = document.querySelectorAll('.dayMealtotal')
    var ChartTotal = data.datasets[0].data

    for (let i = 0; i < ChooseDay.length; i++) {
        var element = ChooseDay[i].innerText.replace(' Cal','');
        ChartTotal[i].y = Number(element)
        
    }
    const ctx = document.getElementById('myChart');
    const config = {
        type: 'bar',
        data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }

            }
        }
    };
    const myChart = new Chart(ctx, config);


}

function clearchart(){
    const ctx = document.getElementById('myChart');
    ctx.remove()
}
function createchart(){
    var createCanvas = document.createElement('canvas')
    createCanvas.setAttribute('id','myChart')
    createCanvas.setAttribute('width','21000')
    createCanvas.setAttribute('height','3000')
    var loaction = document.querySelector('.chartBox')
    loaction.appendChild(createCanvas)
}