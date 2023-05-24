var todaysCalories
var breakfastCalories
var lunchCalories
var dinnerCalories
var mealCalories
var Meal = [{}]

var dailyMeal =  { 
  breakfast: breakfastCalories,
  lunch: lunchCalories,
  dinner: dinnerCalories
} 



// var query = '.25lb of steak and mash potatos and broccoli'

// fetch('https://api.calorieninjas.com/v1/nutrition?query=' + query, {
//     headers: {
//         'X-Api-Key': 'yZsd0WiNkXu'
//     }
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         console.log(data.calories)
//     });

//*Just adds header Days time and date
 function setDate() {
    var today = dayjs();
    todayHour = Number(dayjs().format('HH'));
    var date = document.querySelector('#date')
    var time = document.querySelector('#time')
    date.innerText = today.format('MMM DD, YYYY')
    time.innerText = today.format('hh:mm A')
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
calories :1804.3,
carbohydrates_total_g :0,
cholesterol_mg :10850,
fat_saturated_g :822.8,
fat_total_g :2131.4,
fiber_g :0,
name :"steak",
potassium_mg :22019,
protein_g :2943.5,
serving_size_g :11339.8,
sodium_mg :5914,
sugar_g :0,
}

var items4 = {
calories :35,
carbohydrates_total_g :7.3,
cholesterol_mg :0,
fat_saturated_g :0.1,
fat_total_g :0.4,
fiber_g :3.3,
name :"broccoli",
potassium_mg :65,
protein_g :2.4,
serving_size_g :100,
sodium_mg :41,
sugar_g :1.4,
}




//When called, push new item into the meal object
function addItems() {
  Meal.push(data)
}

//Add Total Calories, Scan the Nested array and search for the "calories" element
//Add until done.
function mealCalories() {
    for (let index = 1; index < Meal.length; index++) {
    mealCalories = mealCalories + Meal[index].calories;
    console.log("Meal Calories: " + mealCalories)
  }
  
}

//Determine what time of the day it is, then push mealCalries
function partofdayCalories() {
  if (todayHour < 8 ) {
    breakfastCalories = breakfastCalories + mealCalories
  } else if (todayHour < 7 && todayHour < 16) {
    lunchCalories = lunchCalories + mealCalories
  } else if (todayHour > 15 && todayHour <= 24) {
    dinnerCalories = dinnerCalories + mealCalories
  }
}



function saveCalories (weekday, Calories){
// Save Total Calories to days of the Week to local storage Format: "Day of Week" : "Calories"

}

// localStorage.setItem('weeklyCalories', JSON.stringify('dailyIntake')

// }
// let weekday = dayjs().format('dddd')














function weekCalories() {
    var day1 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };

    var day2 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };
    var day3 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };
    var day4 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };
    var day5 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };
    var day6 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };
    var day7 = {
        breakfast: breakfast.calories,
        lunch: lunch.calories,
        dinner: dinner.calories
    };

    var week1 = {
        day1: day1.calories,
        day2: day2.calories,
        day3: day3.calories,
        day4: day4.calories,
        day5: day5.calories,
        day6: day6.calories,
        day7: day7.calories
    }
}

    


























const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: '# of Calories',
      data: [1200, 1900, 1300, 1400, 1500, 0],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});