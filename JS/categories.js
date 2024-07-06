// start categories\\

let categories = [];
async function getData() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let data = await response.json();
  categories = data.categories;

}
getData();
$("#categories").click(function () {
  let dataBox = [];
  for (let i = 0; i < categories.length; i++) {
    dataBox += `
    <div onclick="getIndexCategories(${i})" class="col-sm-3 data-box position-relative overflow-hidden">
              <img class="w-100  border-1 rounded-3 " src="${categories[i].strCategoryThumb}" alt="img_meals">
              <div class="col-sm-3 data-box-hover overflow-hidden py-3 text-center position-absolute top-0">
              <h4 class="w-100 ">${categories[i].strCategory}</h4>
              <p class="w-100 ">${categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
              </div>
              </div>
   `;
  }
  $("#leftMenu").animate({ width: "0px" });
  document.getElementById("dataContainer").innerHTML = dataBox;
});

// =============================================================================================

function getIndexCategories(IndeX) {
  let areaName = categories[IndeX].strCategory;
  categoriesItem(areaName);
  // console.log(areaName);
  // getAreaData(areaName);
}
let categorieItem = [];
async function categoriesItem(CTI) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${CTI}`
  );
  let Dtat = await response.json();

  categorieItem = Dtat.meals;
  diplaycategorieItem()
  
}

function diplaycategorieItem() {
  DataBox = ``;
  for (let i = 0; i < categorieItem.length; i++) {
    DataBox += `
              <div onclick="getIndexMeal(${i})"  class="col-sm-3 data-box position-relative overflow-hidden">
              <img class="w-100  border-1 rounded-3 " src="${categorieItem[i].strMealThumb}" alt="img_meals">
              <div class="col-sm-3 data-box-hover text-center position-absolute top-0">
              <h2>${categorieItem[i].strMeal}</h2>
              </div>
              </div>

        `;
  }
  document.getElementById("dataContainer").innerHTML=DataBox;
}
// =============================================================================================
function getIndexMeal(idIndeX) {
    let IDMeal = categorieItem[idIndeX].idMeal;
    console.log(IDMeal);
    AreaCategories(IDMeal);
    // getAreaData(areaName);
  }
  
  let AreaCategorie = [];
  async function AreaCategories(idMeal) {
    let response = await fetch(
      // "www.themealdb.com/api/json/v1/1/categories.php" catigoris  Croatian
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    let data = await response.json();
    AreaCategorie = data.meals;
    disPalyDetales();
    // console.log(AreaCategorie);
  }
  
  function disPalyDetales() {
    let dataBox = [];
    for (let i = 0; i < AreaCategorie.length; i++) {
      dataBox += `
       <div class="col-lg-4 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${AreaCategorie[i].strMealThumb}" alt="" />
              <h4 class="text-white">${AreaCategorie[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${AreaCategorie[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${AreaCategorie[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${AreaCategorie[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure1}${AreaCategorie[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure2}${AreaCategorie[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure3}${AreaCategorie[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure4}${AreaCategorie[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure5}${AreaCategorie[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure6}${AreaCategorie[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure6}${AreaCategorie[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure6}${AreaCategorie[i].strIngredient9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${AreaCategorie[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${AreaCategorie[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
  
       `;
    }
    // console.log(dataBox);
    $("#leftMenu").animate({ width: "0px" });
    document.getElementById("dataContainer").innerHTML = dataBox;
      $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");
  }
