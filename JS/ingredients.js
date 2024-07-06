// start Ingredients

let Ingredients = [];
async function gitDataIngredients() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let data = await response.json();
  Ingredients = data.meals;

}
gitDataIngredients();
$("#Ingredients").click(function () {
  let dataBox = [];
  for (let i = 0; i < Ingredients.length; i++) {
    dataBox += `
    <div onclick=" getIndex(${i})" class="col-md-3  data-box position-relative overflow-hidden">
      <i class="text-white fa-solid fa-drumstick-bite fa-4x"></i>
      <h4 class="w-100 text-white ">${Ingredients[i].strIngredient}</h4>
      <p class="w-100 text-white ">${Ingredients[i].strDescription?.split(` `).slice(0,17).join(` `)}</p>
     </div>

   `;
  }
  $("#leftMenu").animate({ width: "0px" });
  document.getElementById("dataContainer").innerHTML = dataBox;
});
// ==========================================================================================================

function getIndex(IndeX) {
  // let areaName = Area[IndeX];
  let ingredName = Ingredients[IndeX].strIngredient;

  Ingredient(ingredName);
  // getAreaData(areaName);
}

let Ingredien = [];

async function Ingredient(ApiIngred) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ApiIngred}`
  );
  let data = await response.json();
  Ingredien = data.meals;
  showData()
}

function showData() {
  
    let dataBox = [];
    for (let i = 0; i < Ingredien.length; i++) {
      dataBox += `
      <div onclick="getIngred(${i})" class="col-sm-3 data-box position-relative overflow-hidden">
                <img class="w-100  border-1 rounded-3 " src="${Ingredien[i].strMealThumb}" alt="img_meals">
                <div class="col-sm-3 data-box-hover text-center position-absolute top-0">
                <h2>${Ingredien[i].strMeal}</h2>
                </div>
                </div>
     `;
    }
    
  document.getElementById("dataContainer").innerHTML = dataBox;
}
//   ====================================================================

function getIngred(ingInedx) {
  let ingredID=Ingredien[ingInedx].idMeal;
  AreaCategories(ingredID)
}



let Ingredie = [];
async function AreaCategories(idMeal) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let data = await response.json();
  Ingredie = data.meals;
  disPalyDetales();
}

function disPalyDetales() {
  let dataBox = [];
  for (let i = 0; i < Ingredie.length; i++) {
    dataBox += `
       <div class="col-lg-4 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${Ingredie[i].strMealThumb}" alt="" />
              <h4 class="text-white">${Ingredie[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${Ingredie[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${Ingredie[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${Ingredie[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure1}${Ingredie[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure2}${Ingredie[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure3}${Ingredie[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure4}${Ingredie[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure5}${Ingredie[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure6}${Ingredie[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure6}${Ingredie[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${Ingredie[i].strMeasure6}${Ingredie[i].strIngredient9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${Ingredie[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${Ingredie[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
  
       `;
  }
  console.log(dataBox);
  document.getElementById("dataContainer").innerHTML = dataBox;
  $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");
}
