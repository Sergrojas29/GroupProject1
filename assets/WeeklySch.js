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

var weeklyMeal = {
  monday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
  tuesday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
  wednesday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
  thursday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
  friday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
  saturday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
  sunday: {
    breakfast: breakfastCalories,
    lunch: lunchCalories,
    dinner: dinnerCalories,
  },
};
