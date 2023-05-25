function saveCalories() {
    for (let i = 0; i < weekArray.length; i++)
    localStorage.setItem("meal", JSON.stringify(mealCalories))
}

