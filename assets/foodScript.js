var todaysCalories
var breakfastCalories
var lunchCalories
var dinnerCalories
var totalCalories
var mealCalories
var Meal = [{}]

var dailyMeal = {
  breakfast: breakfastCalories,
  lunch: lunchCalories,
  dinner: dinnerCalories,
  total: totalCalories,

}


var breafastbtn = document.querySelector('#breafastbtn')

breafastbtn.addEventListener('click', callFood, breakfastFood)
lunchbtn.addEventListener('click', callFood, lunchFood)
dinnerbtn.addEventListener('click', callFood, dinnerFood)

function processFood(data){
  console.log(data)

  for (let index = 0; index < data.items.length; index++) {
    //For each item in the Array, pull the calories
    mealCalories =+ data.items[index].calories;
    //Add each meal to the nutrition total
    Meal.push( data.items[index])
    console.log(mealCalories)
    
  }
  
  console.log(Meal)
  $(".inputTextArea").val(Meal)
  console.log("Meal Calories: " + mealCalories)
  
}



function callFood() {
// $('.inputTextArea').val()
  var query = "Steak and eggs"

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
      processFood(data)
    })
};



//*Just adds header Days time and date
function setDate() {
  var today = dayjs();
  todayHour = Number(dayjs().format('HH'));
  var date = document.querySelector('#date')
  var time = document.querySelector('#time')
  return todayHour
}
setDate()

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

var items3 = {
  calories: 1804.3,
  carbohydrates_total_g: 0,
  cholesterol_mg: 10850,
  fat_saturated_g: 822.8,
  fat_total_g: 2131.4,
  fiber_g: 0,
  name: "steak",
  potassium_mg: 22019,
  protein_g: 2943.5,
  serving_size_g: 11339.8,
  sodium_mg: 5914,
  sugar_g: 0,
}

var items4 = {
  calories: 35,
  carbohydrates_total_g: 7.3,
  cholesterol_mg: 0,
  fat_saturated_g: 0.1,
  fat_total_g: 0.4,
  fiber_g: 3.3,
  name: "broccoli",
  potassium_mg: 65,
  protein_g: 2.4,
  serving_size_g: 100,
  sodium_mg: 41,
  sugar_g: 1.4,
}


function breakfastFood(){
  breakfastCalories =+ mealCalories
  totalCalories =+ breakfastCalories
}

function lunchFood() {
  lunchCalories =+ mealCalories
  totalCalories =+ lunchCalories
}

function dinnerFood() {
  dinnerCalories =+ mealCalories
  totalCalories =+ dinnerCalories
}