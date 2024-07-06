// start area
let Area = [];
async function gitDataArea() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let data = await response.json();
  Area = data.meals;
  console.log(Area);
  // strArea
}


gitDataArea();
$("#Area").click(function () {
  let dataBox = [];
  for (let i = 0; i < Area.length; i++) {
    dataBox += `
    <div onclick="getIndex(${i}),disPalyData()"  id="getIndex" class="col-sm-3 IndeX data-box position-relative overflow-hidden">
      <i class="fa-solid fa-house-laptop fa-4x text-white IndeX"></i>
              <h3 class="w-100 text-white ">${Area[i].strArea}</h3>
              </div>
   `;
  }

  $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");

  document.getElementById("dataContainer").innerHTML = dataBox;
});

function getIndex(IndeX) {
  let areaName = Area[IndeX].strArea;

  console.log(areaName);
  getAreaData(areaName);
}

let Areaa = [];
async function getAreaData(AreagApi) {
  let response = await fetch(
    // "www.themealdb.com/api/json/v1/1/categories.php" catigoris  Croatian
    `https://themealdb.com/api/json/v1/1/filter.php?a=${AreagApi}`
  );
  let data = await response.json();
  Areaa = data.meals;
  disPalyData();
    // console.log(Areaa);
}

function disPalyData() {
  let dataBox = [];
  for (let i = 0; i < Areaa.length ; i++) {
    dataBox += `
      <div onclick="getIndexMeal(${i})" class="col-sm-3    data-box position-relative overflow-hidden">
                <img class="w-100  border-1 rounded-3 " src="${Areaa[i].strMealThumb}" alt="img_meals">
                <div class="col-sm-3 data-box-hover overflow-hidden py-3 text-center position-absolute top-0">
                <h4 class="w-100 ">${Areaa[i].strMeal}</h4>
                </div>
                </div>
     `;
  }
  // console.log(dataBox);
  $("#leftMenu").animate({ width: "0px" });
  document.getElementById("dataContainer").innerHTML = dataBox;
}

// start AreaCategories

function getIndexMeal(AreaidIndeX) {
console.log(AreaidIndeX);
  // let areaIdMeal=Areaa[idIndeX].strMeal;
  // console.log(areaIdMeal);
  // AreaCategories(areaIdMeal);
  // getAreaData(areaName);
}

let AreaMeals = [];
async function AreaCategories(areapapmter) {
  let response = await fetch(
    // "www.themealdb.com/api/json/v1/1/categories.php" catigoris  Croatian
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${areapapmter}`
  );
  let data = await response.json();
  AreaMeals = data.meals;
  disPalyDetales();
  // console.log(AreaMeals);
}

function disPalyDetales() {
  let dataBox = [];
  for (let i = 0; i < AreaMeals.length; i++) {
    dataBox += `
     <div class="col-lg-4 mt-1 p-3">
            <img class="w-100 border-1 rounded-3" src="${AreaMeals[i].strMealThumb}" alt="" />
            <h4 class="text-white">${AreaMeals[i].strMeal}</h4>
    </div>
    <div class="col-lg-8 mt-1  p-3">
            <h3 class="text-white left-0 text-start">Instructions</h3>
            <p class="p-diplay text-white"> 
            ${AreaMeals[i].strInstructions}
            </p>
            <h3 class="fw-bolder text-white text-start  ">Area : <span>${AreaMeals[i].strArea}</span></h3>
            <h3 class="fw-bolder text-white text-start">Category : <span>${AreaMeals[i].strCategory}</span></h3>
            <h3 class="fw-bolder text-white text-start">Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure1}${AreaMeals[i].strIngredient1}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure2}${AreaMeals[i].strIngredient2}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure3}${AreaMeals[i].strIngredient3}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure4}${AreaMeals[i].strIngredient4}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure5}${AreaMeals[i].strIngredient5}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure6}${AreaMeals[i].strIngredient7}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure6}${AreaMeals[i].strIngredient8}</li>
              <li class="alert alert-info m-2 p-1">${AreaMeals[i].strMeasure6}${AreaMeals[i].strIngredient9}</li>
            </ul>
            <h3 class="text-white w-100 text-start">Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <a target="_blank" href="${AreaMeals[i].strSource}" class="btn btn-success me-2">Source</a>
              <a target="_blank" href="${AreaMeals[i].strYoutube}" class="btn btn-danger">Youtube</a>   
            </ul>
     </div>


     `;
  }
  // console.log(dataBox);
  $("#leftMenu").animate({ width: "0px" });
  document.getElementById("dataContainer").innerHTML = dataBox;
}
