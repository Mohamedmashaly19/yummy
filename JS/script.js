"use strict";

// start home
// get data
// async function getCategories() {
//   let response = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
  
//   let catData = await response.json();
//   // console.log(catData);
// }
// getCategories();
//

let meals = [];
async function gitData() {
  let response = await fetch(
    // "www.themealdb.com/api/json/v1/1/categories.php" catigoris
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let data = await response.json();
  meals = data.meals;
  display();
  // console.log(meals);
}
gitData();

function display() {
  let dataBox = [];
  for (let i = 0; i < meals.length; i++) {
    dataBox += `
    <div onclick="getIndxHome(${i})" class="col-sm-3 data-box position-relative overflow-hidden">
              <img class="w-100  border-1 rounded-3 " src="${meals[i].strMealThumb}" alt="img_meals">
              <div class="col-sm-3 data-box-hover text-center position-absolute top-0">
              <h2>${meals[i].strMeal}</h2>
              </div>
              </div>
   `;
  }
  document.getElementById("dataContainer").innerHTML = dataBox;
}

// nav bar\
// open
$("#iconNav").click(function () {
  $("#leftMenu").animate({ width: "235px" });
  $("#iconNav").removeClass("dBlock");
  $("#iconNav").addClass("dNone");
  $("#closeIcon").addClass("dBlock");

  for (let i=0;i<5;i++){
    $(".sidenav").eq(i).animate({
        top:0
    },(i+5) * 100)
      }
    
});

$("#closeIcon").click(function () {
  $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");
  for (let i=0;i<5;i++){
    $(".sidenav").eq(i).animate({
        top:0
    },(i+5) * 100)
      }
});

// =====================================*********************************---------------------------------

function getIndxHome(homeInedx) {
  let homeId = meals[homeInedx].idMeal;
  homeData(homeId);
  // console.log(homeId);
}

let arrayHome = [];
async function homeData(idMeal) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let data = await response.json();
  arrayHome = data.meals;
  disPalyHomeDetales();
}

function disPalyHomeDetales() {
  let dataBox = [];
  for (let i = 0; i < arrayHome.length; i++) {
    dataBox += `
       <div class="col-lg-4 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${arrayHome[i].strMealThumb}" alt="" />
              <h4 class="text-white">${arrayHome[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${arrayHome[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${arrayHome[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${arrayHome[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure1}${arrayHome[i].strarrayHoment1}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure2}${arrayHome[i].strarrayHoment2}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure3}${arrayHome[i].strarrayHoment3}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure4}${arrayHome[i].strarrayHoment4}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure5}${arrayHome[i].strarrayHoment5}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure6}${arrayHome[i].strarrayHoment7}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure6}${arrayHome[i].strarrayHoment8}</li>
                <li class="alert alert-info m-2 p-1">${arrayHome[i].strMeasure6}${arrayHome[i].strarrayHoment9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${arrayHome[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${arrayHome[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
  
       `;
  }
  // console.log(dataBox);
  document.getElementById("dataContainer").innerHTML = dataBox;
  $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");
}

// ================================END HOMEEEEEEEEE ===============

// ================================ start search  =================


let search = document.getElementById("search");
search.addEventListener("click", function () {
  
  let dataContainer = ``;
  for (let i = 0; i < 1; i++) {
    dataContainer += `
  <div class="col-md-6 ">
  
   <input  id="inputName" type="text" placeholder="Search By Namy" class="w-100   bg-black m-3 form-control">

  </div>
  <div class="col-md-6  ">
  
            <input id="inputLetter" maxlength="1" type="text" placeholder="search By Frist Letter" class="w-100  bg-black m-3 form-control">

  </div>
  <div  id="Searchcontinar" class="col-md-12 row text-center gy-4 ms-2 mt-2 w-100 h-100  ">
  
            <div
            class="w-100 homeBage d-flex justify-content-center align-items-center mt-5"
          >
            <span class="loader"></span>
          
          </div>

  </div>
  
  `;
  }

  document.getElementById("dataContainer").innerHTML = dataContainer;
  let inputLetter = document.getElementById("inputLetter");
  let inputName = document.getElementById("inputName");

  $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");

  console.log(inputName);

  inputName.addEventListener("input", function () {
    let term = inputName.value;
    let dataBox=``;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].strMeal.toLowerCase().includes(term.toLowerCase()) ==true) {
        dataBox += `
        <div onclick="getIndxHome(${i})" class="col-md-3  data-box position-relative overflow-hidden">
                  <img class="w-100  border-1 rounded-3 " src="${meals[i].strMealThumb}" alt="img_meals">
                  <div class="col-sm-3 data-box-hover text-center position-absolute top-0">
                  <h2>${meals[i].strMeal}</h2>
                  </div>
                  </div>
       `;      
      
      }else{
        dataBox=``;
      }
    }
    document.getElementById("Searchcontinar").innerHTML = dataBox;


  });

  inputLetter.addEventListener("input", function () {
    let term = inputLetter.value;
    let dataBox=``;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].strMeal.toLowerCase().includes(term.toLowerCase()) ==true) {
        dataBox += `
        <div onclick="getIndxHome(${i})" class="col-md-3  data-box position-relative overflow-hidden">
                  <img class="w-100  border-1 rounded-3 " src="${meals[i].strMealThumb}" alt="img_meals">
                  <div class="col-sm-3 data-box-hover text-center position-absolute top-0">
                  <h2>${meals[i].strMeal}</h2>
                  </div>
                  </div>
       `;      
      
      }else{
        dataBox=``;
      }
    }

    document.getElementById("Searchcontinar").innerHTML = dataBox;

  });
});
