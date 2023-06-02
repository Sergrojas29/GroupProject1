let todaysCalories = 0
let breakfastCalories = 0
let lunchCalories = 0
let dinnerCalories = 0
let totalCalories = 0
let mealCalories = 0
var Meal = []


var dailyMeal = {
  breakfast: breakfastCalories,
  lunch: lunchCalories,
  dinner: dinnerCalories,
  total: totalCalories,

}


function dayOftheWeek(input) {
  // var today = dayjs().set('hour', 18).set('minute', 55)

  var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var Weekday = document.querySelector('#MainDayofWeek')
  Weekday.innerText = weekArray[input]

}




//*Just adds header Days time and date
function setDate() {
  var today = dayjs();
  day = dayjs().day()
  todayHour = Number(dayjs().format('HH'));
  var date = document.querySelector('#date')
  var time = document.querySelector('#time')
  dayOftheWeek(day)

}
setDate()




$('#breakfastbtn').on('click', function () {
  callFood('breakfast')
})
$('#lunchbtn').on('click', function () {
  callFood('lunch')
})
$('#dinnerbtn').on('click', function () {
  callFood('dinner')
})


function callCalories() {

  // 
  $("#day" + day).find("#breakfast").find('.mealCal').text(breakfastCalories)
  $("#day" + day).find("#lunch").find('.mealCal').text(lunchCalories)
  $("#day" + day).find("#dinner").find('.mealCal').text(dinnerCalories)
  $("#day" + day).find('.dayMealtotal').text(totalCalories)
  // 
}

function changeDay(input) {
  day = input
  totalCalories = 0
  breakfastCalories = 0
  dinnerCalories = 0
  lunchCalories = 0


  dayOftheWeek(day)
}


function breakfast() {
  breakfastCalories = 0
  breakfastCalories += mealCalories
  totalCalories += breakfastCalories

  callCalories()
}

function lunch() {
  lunchCalories = 0
  lunchCalories += mealCalories
  totalCalories += lunchCalories
  // console.log("Lunch Calories: " + lunchCalories)
  callCalories()
}

function dinner() {
  dinnerCalories = 0
  dinnerCalories += mealCalories
  totalCalories += dinnerCalories
  // console.log("Dinner Calories: " + dinnerCalories)
  callCalories()
}







function callFood(time) {

  var query = $('#inputTextArea').val()
  // console.log(JSON.stringify(time))
  fetch('https://api.calorieninjas.com/v1/nutrition?query=' + query, {
    headers: {
      'X-Api-Key': 'QoMyRTp5iThrCA1lK5JxQA==9qY9LyZsd0WiNkXu'
    }
  })
    .then(function (response) {
      localStorage.setItem('test', response)
      return response.json();
    })
    .then(function (data) {
      mealCalories = 0
      Meal = []





      // console.log(data)
      CalculateTotalNutritionInfo(data)
      getCalories(time)
      Meal.push(data.items)


      setChartData()
      sumthenWrite()

      for (let index = 0; index < data.items.length; index++) {
        //For each item in the Array, pull the calories
        var calories = Number(data.items[index].calories)
        // console.log('Calories: ' + calories)
        mealCalories += calories
        mealCalories = Math.round(mealCalories)


      }
      // console.log('Meal Calories: ' + mealCalories)

      //Meal.push(data.items[index])
      // console.log("Meal " + JSON.stringify(Meal))
      // console.log("Now log to meal Name")

      if (time == "breakfast") {
        // console.log('breakfast')
        breakfast()
      } else if (time == "lunch") {
        // console.log('lunch')
        lunch()
      } else if (time == "dinner") {
        // console.log('dinner')
        dinner()
      }
    })


};























//! data Return from calorieNinjas
var items1 = {
  calories: 477.8,
  carbohydrates_total_g: 110.2,
  cholesterol_mg: 0,
  fat_saturated_g: 0.3,
  fat_total_g: 2.3,
  fiber_g: 40.7,
  name: "carrots",
  potassium_mg: 410,
  protein_g: 10.3,
  serving_size_g: 1360.7759999999998,
  sodium_mg: 775,
  sugar_g: 46.7,
}

var items2 = {
  calories: 243.9,
  carbohydrates_total_g: 20.9,
  cholesterol_mg: 35,
  fat_saturated_g: 2.1,
  fat_total_g: 11.2,
  fiber_g: 1.4,
  name: "chicken sandwich",
  potassium_mg: 184,
  protein_g: 16.2,
  serving_size_g: 100,
  sodium_mg: 767,
  sugar_g: 3.6,
}



















