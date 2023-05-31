let todaysCalories = 0
let breakfastCalories = 0
let lunchCalories = 0
let dinnerCalories = 0
let totalCalories 
let mealCalories = 0
var Meal = []

var dailyMeal = {
  breakfast: breakfastCalories,
  lunch: lunchCalories,
  dinner: dinnerCalories,
  total: totalCalories,

}

//*Just adds header Days time and date
function setDate() {
  var today = dayjs().day();
  todayHour = Number(dayjs().format('HH'));
  
  var date = document.querySelector('#date')
  var time = document.querySelector('#time')
  return todayHour
}
setDate()




$('#breakfastbtn').on('click', function(){
  callFood('breakfast')
})
$('#lunchbtn').on('click', function() {
  callFood('lunch')
})
$('#dinnerbtn').on('click', function () {
  callFood('dinner')
})








function callFood(time) {
// $('.inputTextArea').val()
  var query = "Steak and broccoli"
console.log(JSON.stringify(time))
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
      console.log(data)
      Meal.push(data.items)
      mealCalories = 0
      for (let index = 0; index < data.items.length; index++) {
        //For each item in the Array, pull the calories
          var calories = Number(data.items[index].calories)
          console.log('Calories: ' + calories)
          mealCalories += calories
         
        
        
      }  console.log('Meal Calories: ' + mealCalories)
        
      //Meal.push(data.items[index])
      console.log("Meal " + JSON.stringify(Meal))
      console.log("Now log to meal Name")
      
      if (time == "breakfast") {

        console.log(time)
        breakfastCalories += mealCalories
        totalCalories += breakfastCalories
        console.log("Breakfast Calories: " + breakfastCalories)
        callCalories()
      } else if (time == "lunch") {

        console.log(time)
        lunchCalories += mealCalories
        totalCalories += lunchCalories
        console.log("Lunch Calories: " + lunchCalories)
        callCalories
      } else if (time == "dinner") {

        console.log(time)
        dinnerCalories += mealCalories
        totalCalories += dinnerCalories
        console.log("Dinner Calories: " + dinnerCalories)
        callCalories()
      }       
    })    
};

//Possible Event 
function callCalories() {
  
    
    $("#day" + today).find("#breakfast").find('.mealCal').text(breakfastCalories)
    $("#day" + today).find("#lunch").find('.mealCal').text(lunchCalories)
    $("#day" + today).find("#dinner").find('.mealCal').text(dinnerCalories)
    $("#day" + today).find("#mealTotal").find('.dayMealCal').text(totalCalories)
  
}










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



















