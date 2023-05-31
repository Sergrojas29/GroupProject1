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
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    },
    day1: {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    },
    day2: {
      breakfast:0,
      lunch: 0,
      dinner: 0,
    },
    day3: {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    },
    day4: {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    },
    day5: {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    },
    day6: {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    },
  };
  
