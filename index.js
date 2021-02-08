const foodSearch = () => {
    const searchedFood = document.getElementById("food-search").value;
    console.log(searchedFood);
  
    // Load Data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayFood(data.meals);
    })


}
const displayFood = (foods) => {
    const foodContainer= document.getElementById("food-container")
    foodContainer.innerHTML=""
    foods.forEach(food => {
        console.log(food);
        console.log(food.strMeal);
        // const li = document.createElement("li")
        // li.innerText= food.strMeal
        // foodContainer.appendChild(li)
        const div = document.createElement("div")
        div.className="col-md-4 mx-auto "
        div.id="fooooood"
    
        div.innerHTML= `
        <div class="food-box my-5 mx-5">
            <img src="${food.strMealThumb}" alt="">
        </div>
        <div class="food-name ">
             <h3>${food.strMeal}</h3>
         </div>
    `
        foodContainer.appendChild(div)
    });
    


}