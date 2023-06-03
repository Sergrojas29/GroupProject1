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
    breakfast: 0,
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

function initilizeLocalStorage() {
  var dataSaved = JSON.parse(localStorage.getItem("saved"));
  // console.log(weeklyMeal);
  if (!dataSaved) {
    localStorage.setItem("saved", JSON.stringify([weeklyMeal]));
  }
}
initilizeLocalStorage();
printCalories();

function saveCalories(updatedWeek) {
  // var dayOfTheWeek = dayjs().format('dddd')
  localStorage.setItem("saved", JSON.stringify([updatedWeek]));
}

function getCalories(time) {
  var selday = "day" + day;
  var calNut = document.querySelector("#calories").innerText;
  var storage = JSON.parse(localStorage.getItem("saved"));
  // console.log(storage[0]);
  var updatedWeek = (storage[0][selday][time] = Number(calNut));
  // console.log(updatedWeek);
  saveCalories(storage[0]);
  printCalories();
}

function printCalories() {
  var mealLS = JSON.parse(localStorage.getItem("saved"));
  // console.log(mealLS);
  for (let i = 0; i < 7; i++) {
    var selday = "day" + i;

    $("#day" + i)
      .find("#breakfast")
      .find(".mealCal")
      .text(Math.round(mealLS[0][selday].breakfast));
    $("#day" + i)
      .find("#lunch")
      .find(".mealCal")
      .text(Math.round(mealLS[0][selday].lunch));
    $("#day" + i)
      .find("#dinner")
      .find(".mealCal")
      .text(Math.round(mealLS[0][selday].dinner));
    // $("#day" + i)
    //   .find(".dayMealtotal")
    //   .text(total);
  }
}

function clearCalories() {
  localStorage.setItem("saved", JSON.stringify([weeklyMeal]));
  printCalories();
  sumthenWrite();
  setChartData()
}
