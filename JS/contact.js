let contact = document.getElementById("contact");
contact.addEventListener("click", function () {
  $("#closeIcon").removeClass("dBlock");
  $("#leftMenu").animate({ width: "0px" });
  $("#iconNav").addClass("dBlock");


 
  let contactContainer = ``;
  for (let i = 0; i < 1; i++) {
    contactContainer += `
    <div id="contactUs" class="col-lg-12 w-100">
        <section
          class="p-5 d-flex justify-content-center align-items-center h-100"
        >
          <div class="container text-center">
            <div class="row gy-3 justify-content-md-center my-2">
              <div class="col-md-5 ">
                <input
                oninput="validateTask(this)"
             id="userName"
                  type="text"
                  placeholder="Enter your Name"
                  class="form-control"
                />
                <div class="alert alert-danger w d-none p-2 mt-1">
      <small>Special characters and numbers not allowed</small>
    </div>
              </div>
              <div class="col-md-5 ">
                <input
                oninput="validateTask(this)"
                id="userEmail"
                  type="email"
                  placeholder="Enter your Email"
                  class="form-control"
                />
                <div class="alert alert-danger p-1 d-none mt-1">
      <small>Email not valid *exemple@yyy.zzz</small>
    </div>
              </div>
            </div>
            <div class="row gy-3 justify-content-md-center my-2">
              <div class="col-md-5 ">
                <input
                id="userPhone"
                oninput="validateTask(this)"
                  type="number"
                  placeholder="Enter your Phone"
                  class="form-control"
                />
                <div class="alert alert-danger p-1 d-none mt-1">
      <small>Enter valid Phone Number</small>
    </div>
    
              </div>
              <div class="col-md-5 ">
                <input
                oninput="validateTask(this)"
                id="userAge"
                  type="number"
                  placeholder="Enter your Age"
                  class="form-control"
                />
                <div class="alert alert-danger p-1 d-none mt-1">
      <small>Enter valid age</small>
    </div>
              </div>
            </div>
            <div class="row gy-3 justify-content-md-center my-2">
              <div class="col-md-5 ">
                <input
                oninput="validateTask(this)"
                id="userPassword"
                  type="password"
                  placeholder="Enter Your Passowrd"
                  class="form-control"
                />
                <div class="alert alert-danger p-1 d-none mt-1">
      <small>Enter valid password *Minimum eight characters, at least one letter and one number:*</small>
    </div>
              </div>
              <div class="col-md-5 ">
                <input
                oninput="validateTask(this)"
                id="userREPassword"
                  type="password"
                  placeholder="Repassowrd"
                  class="form-control"
                />
                <div class="alert alert-danger p-1 d-none mt-1">
      <small>Enter valid repassword</small>
    </div>
              </div>
            </div>
            <button  onclick="validateTask(this) id="btnSubmit" class="btn btn-outline-danger  mt-4">
              submit
            </button>
          </div>
        </section>
      </div>
    
    `;
  }
  // console.log(contactContainer);

  document.getElementById("dataContainer").innerHTML = contactContainer;
  
  // ============================validation ============\



});

function validateTask(elemnt) {
    // console.log(elemnt.value,elemnt.id);
  let allRegex = {
    userName: /^[A-Z][a-z][a-z][a-z][a-z]+$/ ,
    userEmail:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    userPhone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    userAge: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    userPassword: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
    userREPassword: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
  }
  if (allRegex[elemnt.id].test(elemnt.value)== true){
    
 
 elemnt.classList.add("is-valid");
 elemnt.classList.remove("is-invalid");
 elemnt.nextElementSibling.classList.replace("d-block","d-none");
//  console.log(elemnt.id);
//  $("#btnSubmit").classList.replace("disabled","d-inline");

 return true
 
}else{
    elemnt.classList.remove("is-valid");
    elemnt.classList.add("is-invalid");
    elemnt.nextElementSibling.classList.replace("d-none","d-block")

    
  }
  
  
  

}
