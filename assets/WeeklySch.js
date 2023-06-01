// function saveCalories() {
    
//     localStorage.setItem("meal", JSON.stringify(mealCalories))
// }

function initilizeLocalStorage() {
    var dataSaved = JSON.parse(localStorage.getItem("saved"));
  
    if (!dataSaved) {
      localStorage.setItem("saved", JSON.stringify([]));
    }
  }
  initilizeLocalStorage();
  
  function saveCalories() {
    // var dayOfTheWeek = dayjs().format('dddd')
    localStorage.setItem("saved", JSON.stringify(weeklyMeal));
  }
  
  function getCalories(time) {
    var selday = 'day' + day
    var calNut = document.querySelector('#calories').innerText
    weeklyMeal[selday][time] = Number(calNut)
    saveCalories()
    printCalories()
  }
  
  function printCalories() {
   
    var selday = 'day' + day
  $("#day" + day).find("#breakfast").find('.mealCal').text(weeklyMeal[selday][breakfast])
  // $("#day" + day).find("#lunch").find('.mealCal').text(weeklyMeal[selday].lunch)
  // $("#day" + day).find("#dinner").find('.mealCal').text(weeklyMeal[selday].dinner)
  // $("#day" + day).find('.dayMealtotal').text(totalCalories)

  }


  var weeklyMeal = {
    day0: {
      breakfast: 60.96,
      lunch: 61.9,
      dinner: 60,
    },
    day1: {
      breakfast: 100,
      lunch: 100,
      dinner: 100,
    },
    day2: {
      breakfast:200,
      lunch: 200,
      dinner: 200,
    },
    day3: {
      breakfast: 300,
      lunch: 300,
      dinner: 300,
    },
    day4: {
      breakfast: 400,
      lunch: 400,
      dinner: 400,
    },
    day5: {
      breakfast: 500,
      lunch: 500,
      dinner: 500,
    },
    day6: {
      breakfast: 600,
      lunch: 600,
      dinner: 600,
    },
  };
  
