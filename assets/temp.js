sumthenWrite()

//! Code to write weeklyMeal to HTML
function saveMealData(mealTitle , weekDayNum) {
    var mealSelction = document.querySelectorAll(`#${mealTitle}`)
    var calNum = Number(mealSelction[weekDayNum].children[1].children[0].innerText)
    // var caltotal = Math.round(weeklyMealGet[0]['day' + weekDayNum][mealTitle])
    return calNum
}


function sumthenWrite() {
    var ChooseDay = document.querySelectorAll('.dayMealtotal[class="dayMealtotal"]')
    for (let i = 0; i < 7; i++) {
        var totalCals = 0
        totalCals+= saveMealData("breakfast", i) + saveMealData("lunch", i) +saveMealData("dinner", i)
        ChooseDay[i].innerText = totalCals
        changeTotalColor(i)
    }
}


//! Change HTML to Color >> added to sumthenWrite()
function changeTotalColor(weekDayNum){
    var mealSelction = document.querySelectorAll(`.tolalCals`)[weekDayNum]    
    var calNum = Number(mealSelction.children[0].innerText)

    const NotEnough = 1400
    const health = 2000
    const Limit = 2400

    if( calNum < NotEnough){
        mealSelction.setAttribute('style', 'background: none')
    }
    else if (calNum >= NotEnough & calNum < health) {
        mealSelction.setAttribute('style', 'background: rgb(48, 244, 70, 0.55);')
        
    }
    else if(calNum >= health && calNum < Limit){
        mealSelction.setAttribute('style', 'background: rgb(255, 183, 74, 0.55)')

    }
    else{
        mealSelction.setAttribute('style', 'background: rgb(255, 74, 74, 0.55)')

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
    WritePieChart()
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

// ! pieChart function \\ old 
// * function pieChange(){
// *    const pieChart = document.querySelector('#pieRepresintation')
// *     const calfromInput = Number(document.querySelector('#calories').innerText)

// *     var sizeForpie = (calfromInput / 2000) * 100
// *     pieChart.setAttribute('style',`background-image: conic-gradient(var(--headerColorSecond) ${sizeForpie}%, rgba(255, 255, 255, 0) 1%, rgba(0, 0, 0, 0));`)
// * }

//! PieGraph Second Function
WritePieChart()

function WritePieChart(){
    clearchart('PieChart')
    createPiechart()
    const ctx3 = document.getElementById('PieChart');
    var MealCalInput = Number(document.querySelector('#calories').innerText)
    var TotalCalForTheDay = 2200
    var CalLeft = TotalCalForTheDay - MealCalInput
    const data = {
        labels: [
            'Daily Total Calorie',
            'Meal Calorie',    
        ],
        datasets: [{
            
            label: 'Pie Chart',
            data: [CalLeft, MealCalInput],
            backgroundColor: [
                '#a7e8d2',
                '#379583',
                
            ],
            hoverOffset: 30
        }]
    };
    
    const config3 = {
        type: 'pie',
        data: data,
        options:{
            plugins:{
                tooltip:{
                    enabled:false
                },
                legend:{
                    display: false,

                }
            }
        }
        
    };
    
    const myChartpie = new Chart(ctx3, config3);
}






//! Code for graph
setChartData()
function setChartData(){
    clearchart('myChart')
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

function clearchart(charttoremoveId){
    const ctx = document.getElementById(charttoremoveId);
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

function createPiechart(){
    var createCanvas = document.createElement('canvas')
    createCanvas.setAttribute('id','PieChart')
    var loaction = document.querySelector(`.PieChartBox`)
    loaction.appendChild(createCanvas)
}