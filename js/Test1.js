
   // Get references to the dropdown menus
   const dropdown1 = document.getElementById("dropdown1");
   const dropdown2 = document.getElementById("dropdown2");
   const dropdown3 = document.getElementById("dropdown3");
   const dropdown4 = document.getElementById("quantity");
   const notes = document.getElementById("notes");
   const inputName = document.getElementById('name');
   const email = document.getElementById('email');
   const phone =  document.getElementById('phone');
   const x = document.getElementById("pdf");
   const ddown3 = document.getElementById("ddown3");
   var currentStep = 1;
   var totalSteps = 3; // set the total number of steps in the form
   
   // Add event listener to the dropdown menus
   dropdown1.addEventListener("change", updateDropdown2);
   dropdown1.addEventListener("change", updateDropdown3);
   dropdown1.addEventListener("change", clearPrice);
   dropdown2.addEventListener("change", clearPrice);
   dropdown3.addEventListener("change", clearPrice);
   dropdown4.addEventListener("change", clearPrice);
   dropdown1.addEventListener("change", hidePdf);
   dropdown2.addEventListener("change", hidePdf);
   dropdown3.addEventListener("change", hidePdf);
   dropdown4.addEventListener("change", hidePdf);
   dropdown2.addEventListener("change", designUpdates);
   dropdown1.addEventListener("change", clearNonInput);
   dropdown2.addEventListener("change", clearNonInput);
   dropdown3.addEventListener("change", clearNonInput);
   notes.addEventListener("change", hidePdf);
   dropdown1.addEventListener("click", clearError);
   dropdown2.addEventListener("click", clearError);
   dropdown3.addEventListener("click", clearError);
   dropdown4.addEventListener("click", clearError);
   notes.addEventListener("change", clearError);
   inputName.addEventListener("click", clearPageError);
   email.addEventListener("click", clearPageError);
   phone.addEventListener("click", clearPageError);
   // Function to update the second dropdown menu
   function updateDropdown3() {
     // Clear the second dropdown menu
     dropdown3.innerText = "";

     // Get the selected value from the first dropdown menu
     const selectedValue = dropdown1.value;

     // Create new options for the second dropdown menu based on the selected value
     if (selectedValue === "Design") {
      ddown3.classList.remove("col-md-6");
      ddown3.classList.add("col-md-12");
      dropdown4.style.display = "none";
      dropdown4.placeholder = "";
      dropdown3.appendChild(createOption("Choose Size"));
     } else if (selectedValue === "End-to-End Video Production") {
      ddown3.classList.remove("col-md-12");
      ddown3.classList.add("col-md-6");
      dropdown4.style.display = "block";
      dropdown3.appendChild(createOption("Choose Duration"));
      dropdown3.appendChild(createOption("3 months"));
      dropdown3.appendChild(createOption("6 months"));
      dropdown3.appendChild(createOption("12 months"));
     } else if (selectedValue === "3D and 2D Animation") {
      ddown3.classList.remove("col-md-12");
      ddown3.classList.add("col-md-6");
      dropdown4.style.display = "block";
      dropdown3.appendChild(createOption("Choose Duration"));
      dropdown3.appendChild(createOption("3 months"));
      dropdown3.appendChild(createOption("6 months"));
      dropdown3.appendChild(createOption("12 months"));
     } else if (selectedValue === "Brand Communication and Advertising") {
      ddown3.classList.remove("col-md-12");
      ddown3.classList.add("col-md-6");
      dropdown4.style.display = "block";
      dropdown3.appendChild(createOption("Choose Duration"));
      dropdown3.appendChild(createOption("3 months"));
      dropdown3.appendChild(createOption("6 months"));
      dropdown3.appendChild(createOption("12 months"));
     } else if (selectedValue === "Virtual Studio") {
      ddown3.classList.remove("col-md-12");
      ddown3.classList.add("col-md-6");
      dropdown4.style.display = "block";
       dropdown4.placeholder = "No. of Personnel:";
       dropdown3.appendChild(createOption("Choose Duration"));
       dropdown3.appendChild(createOption("3 months"));
       dropdown3.appendChild(createOption("6 months"));
       dropdown3.appendChild(createOption("12 months"));
     }
   }
   function updateDropdown2() {
     // Clear the second dropdown menu
     dropdown2.innerText = "";

     // Get the selected value from the first dropdown menu
     const selectedValue = dropdown1.value;

     // Create new options for the second dropdown menu based on the selected value
     if (selectedValue === "Design") {
      dropdown2.appendChild(createOption("Choose Project"));
      dropdown2.appendChild(createOption("Flyers"));
      dropdown2.appendChild(createOption("Brochures"));
      dropdown2.appendChild(createOption("Corporate Folder"));
      dropdown2.appendChild(createOption("Desktop Publishing"));
      dropdown2.appendChild(createOption("Creative Retouching"));
      dropdown2.appendChild(createOption("Packaging Artwork"));
      dropdown2.appendChild(createOption("Illustration"));
      dropdown4.disabled = true;
     } else if (selectedValue === "End-to-End Video Production") {
       dropdown2.appendChild(createOption("Choose Personnel"));
       dropdown2.appendChild(createOption("Creative Development"));
       dropdown2.appendChild(createOption("Offline and Online Editing"));
       dropdown2.appendChild(createOption("Color Grading"));
       dropdown2.appendChild(createOption("Composting"));
       dropdown2.appendChild(createOption("Motion Graphics"));
       dropdown2.appendChild(createOption("VFX"));
       dropdown2.appendChild(createOption("Chroma Keying"));
     } else if (selectedValue === "3D and 2D Animation") {
       dropdown2.appendChild(createOption("Choose Personnel"));
       dropdown2.appendChild(createOption("Modeling"));
       dropdown2.appendChild(createOption("Rigging"));
       dropdown2.appendChild(createOption("Texturing"));
       dropdown2.appendChild(createOption("Asset Creation"));
       dropdown2.appendChild(createOption("Matte Painting"));
     } else if (selectedValue === "Brand Communication and Advertising") {
       dropdown2.appendChild(createOption("Choose Personnel"));
       dropdown2.appendChild(createOption("Integrated Campaigns"));
       dropdown2.appendChild(createOption("Brand Identity Development"));
       dropdown2.appendChild(createOption("Website Creation"));
     } else if (selectedValue === "Virtual Studio") {
       dropdown2.appendChild(createOption("Choose Personnel"));
       dropdown2.appendChild(createOption("Project Management"));
       dropdown2.appendChild(createOption("Graphic Designers"));
       dropdown2.appendChild(createOption("FA/Production Artists"));
       dropdown2.appendChild(createOption("Post-production and VFX Specialists"));
     }
     dropdown4.value = "";
   }

   function designUpdates(){
    if (dropdown2.value === "Flyers"){
      dropdown3.innerText = "";
      
      
      //dropdown4.value = "1";
      dropdown3.appendChild(createOption("Choose Size"));
      dropdown3.appendChild(createOption("A3"));
      dropdown3.appendChild(createOption("A4"));
      dropdown3.appendChild(createOption("A5"));
      dropdown3.appendChild(createOption("DL"));
    } else if (dropdown2.value === "Brochures"){
      dropdown3.innerText = "";
      
      dropdown3.appendChild(createOption("Choose Size"));
      dropdown3.appendChild(createOption("A4"));
      dropdown3.appendChild(createOption("A5"));
      dropdown3.appendChild(createOption("A6"));
    } else if (dropdown2.value === "Corporate Folder"){
      dropdown3.innerText = "";
      
      //dropdown4.value = "1";
      dropdown3.appendChild(createOption("Choose Size"));
      dropdown3.appendChild(createOption("A4"));
      dropdown3.appendChild(createOption("Letter"));
      dropdown3.appendChild(createOption("Legal"));
    } else if (dropdown2.value === "Desktop Publishing" || dropdown2.value === "Creative Retouching" || dropdown2.value === "Packaging Artwork" || dropdown2.value === "Illustration"){
      dropdown3.innerText = "";
      //dropdown4.value = "1";
      
      dropdown3.disabled = true;
      dropdown3.appendChild(createOption("Choose Size"));
    }
  }

   // Function to create a new option element
   function createOption(value) {
     const option = document.createElement("option");
     option.value = value;
     option.textContent = value;
     return option;
   }
   function checkDropdown(){
     if(dropdown1 !== ""){
       dropdown2.disabled = false;
       dropdown3.disabled = false;
       dropdown4.disabled = false;
     } else {
       dropdown2.disabled = true;
       dropdown3.disabled = true;
       dropdown4.disabled = true;
     }
   }
    function checkPrice(){
         var getValue = dropdown1.value;
         var priceValue = dropdown3.value;
         var personType = dropdown2.value;
         var personCount = dropdown4.value;
         var inputName = inputName;
         var inputEmail = document.getElementById('email').value;
         var inputPhone = document.getElementById('phone').value;
         var lblError = document.getElementById('lblError').value;
         var x = document.getElementById("pdf");
         var pdf = document.getElementById("pdfNo");
         var outputPrice;
         const php = 54.34;
         var priceFlyerA4 = 50;
         var priceBrochureA4 = 150;
         var priceCFolderA4 = 100;
         var price5 = 1800;
        switch (getValue){
          case "Design":
            if(priceValue === "Choose Size" || personType === "Choose Project" || inputName === "" || inputPhone === "" || lblError === "Invalid email address."){
              clearPrice();
              outputError();
              x.style.display = "none";
            } else {
              if (personType === "Flyers"){
                //dropdown4.value = "1";
                if(priceValue === "A4"){
                  var convertedPrice = priceFlyerA4 * php;
                  document.getElementById("price").innerText = "USD " + priceFlyerA4.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                  document.getElementById("converted").innerText = "(PHP " + convertedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) +")";  
                  clearError(); 
                }
              } else if (personType === "Brochures") {
                  //dropdown4.value = "1";
                  if(priceValue === "A4"){
                    var convertedPrice = priceBrochureA4 * php;
                    document.getElementById("price").innerText = "USD " + priceBrochureA4.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    document.getElementById("converted").innerText = "(PHP " + convertedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) +")";
                    clearError();   
                  }
              } else if (personType === "Corporate Folder") {
                  //dropdown4.value = "1";
                  if(priceValue === "A4"){
                    var convertedPrice = priceCFolderA4 * php;
                    document.getElementById("price").innerText = "USD " + priceCFolderA4.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    document.getElementById("converted").innerText = "(PHP " + convertedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) +")";
                    clearError();   
                  }
              } 
              x.style.display = "block";
            }
            
            break;
          case "Virtual Studio":
            if(priceValue === "Choose Duration" || personType === "Choose Personnel" || personCount === "" || inputName === "" || inputPhone === "" || lblError === "Invalid email address."){
              clearPrice();
              outputError();
            } else {
                document.getElementById('next').disabled = false;
                if(priceValue === "3 months"){
                      var finalprice = price5 * 3 * personCount;
                      var convertedPrice = finalprice * php;
                      document.getElementById("price").innerText = "USD " + finalprice.toLocaleString("en-US");  
                      document.getElementById("converted").innerText = "(PHP " + convertedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) +")";
                      clearError();  
                } else if (priceValue === "6 months"){
                      var finalprice = price5 * 6 * personCount;
                      var convertedPrice = finalprice * php;
                      document.getElementById("price").innerText = "USD " + finalprice.toLocaleString("en-US");
                      document.getElementById("converted").innerText = "(PHP " + convertedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) +")";
                      clearError();
                } else if (priceValue === "12 months"){
                      
                  var finalprice = price5 * 12 * personCount;
                  var convertedPrice = finalprice * php;
                  document.getElementById("price").innerText = "USD " + finalprice.toLocaleString("en-US");
                  document.getElementById("converted").innerText = "(PHP " + convertedPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) +")";
                  clearError();
                }
                x.style.display = "block";
            }        
        }
    }
    function hidePdf(){
      var x = document.getElementById("pdf");
      x.style.display = "none";
    }
    function outputError(){
      document.getElementById("error").innerText = "*Please Input All Fields!";
    }
    function clearError(){
      document.getElementById("error").innerText = "";
    }
    function clearPrice(){
      document.getElementById("price").innerText = "";
      document.getElementById("converted").innerText = "";
    }
    function clearNonInput(){
      dropdown4.value = "";
      notes.value = "";
    }
    function clearQ(){
      dropdown4.value = "";
    }
    function clearAll(){
      dropdown1.value = "";
      dropdown2.value = "";
      dropdown3.value = "";
      dropdown4.value = "No. of personnel";
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value ="";
      document.getElementById("lblError").innerText="";
      document.getElementById("errorNum").innerText="";
      document.getElementById("notes").value = "";
      document.getElementById("pdf").style.display = "none";
      document.getElementById('oneerror').innerText = "";
      dropdown2.disabled = true;
      dropdown3.disabled = true;
      dropdown4.disabled = true;
      currentStep = 1;
      showStep(currentStep);
      clearPrice();
      clearError();
    }
    
    function IsValidEmail(email) {
      //Check minimum valid length of an Email.
      /*if (email.length == 0) {
          return false;
      }*/
      //If whether email has @ character.
      if (email.indexOf("@") == -1) {
          return false;
      }

      var parts = email.split("@");
      var dot = parts[1].indexOf(".");
      var len = parts[1].length;
      var dotSplits = parts[1].split(".");
      var dotCount = dotSplits.length - 1;


      //Check whether Dot is present, and that too minimum 1 character after @.
      if (dot == -1 || dot < 2 || dotCount > 2) {
          return false;
      }

      //Check whether Dot is not the last character and dots are not repeated.
      for (var i = 0; i < dotSplits.length; i++) {
          if (dotSplits[i].length == 0) {
              return false;
          }
      }

      return true;
    };
  
  function ValidateEmail() {
    var email = document.getElementById("email").value;
    var lblError = document.getElementById("lblError");
    if (!IsValidEmail(email)) {
      lblError.innerText = "Invalid email address.";
    }
    
}

function phonenumber(number)
{
  return /^([0-9]+-)*([0-9]+)$/.test(number);
}

  function ValidatePhone() {
    var number = document.getElementById("phone").value;
    var lblError = document.getElementById("errorNum");
    lblError.innerText = "";
    if (!phonenumber(number)) {
        lblError.innerText = "Invalid phone number.";
    }
    
}

function disableNext(){
  var inputName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var x = document.getElementById("next");
  if (inputName === "" || !phonenumber(phone) || !IsValidEmail(email)){
    x.disabled = true;
  } else {
    x.disabled = false;
  }
}

function outputPdf(){
  var inputName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var getValue = document.getElementById('dropdown1').value;
  var priceValue = document.getElementById('dropdown3').value;
  var personType = document.getElementById('dropdown2').value;
  var personCount = document.getElementById('quantity').value;
  var price = document.getElementById("price").innerText;
  var convertedPrice = document.getElementById("converted").innerText;
  let longtext = document.getElementById('notes').value;
  let messageText = longtext;
	let messageLines = messageText.split("\n");
	let messageHTML = messageLines.join("<br>");
  document.getElementById("q").innerText = dropdown4.placeholder;
  document.getElementById('pdfName').innerText = inputName;
  document.getElementById('pdfEmail').innerText = email;
  document.getElementById('pdfNumber').innerText = phone;
  document.getElementById('pdfService').innerText = getValue;
  document.getElementById('pdfPackage').innerText = priceValue;
  document.getElementById('pdfPerson').innerText = personType;
  document.getElementById('pdfNo').innerText = personCount;
  document.getElementById('pdfPrice').innerText = price;
  document.getElementById('pdfConvert').innerText = convertedPrice;
  document.getElementById('pdfNotes').innerText = messageHTML;
}

function nextStep() {
  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep); 
  }
  document.getElementById("close").style.display="block";
}

function prevStep() {
if (currentStep > 1) {
  currentStep--;
  showStep(currentStep);
}
document.getElementById('text').style.display = "block";
document.getElementById("modalBody").classList.remove("modal-xl");
document.getElementById("close").style.display="block";
}

function showStep(step) {
document.getElementById("step1").style.display = "none";
document.getElementById("step2").style.display = "none";
document.getElementById("step3").style.display = "none";

document.getElementById("step" + step).style.display = "block";
}
function updateProgressBar(step) {
  var progress = ((step - 1) / (totalSteps - 1)) * 100;
  
}

showStep(currentStep);

function disableNext(){
if ( inputName === "" || email === "Invalid email address." || phone === "Invalid phone number."){
  x.disabled = false;
} else {
  x.disabled = true;
}
}
function resetStep(){
  if(currentStep = 3){
    currentStep = 1;
    showStep(currentStep);
    clearAll();
  }
  document.getElementById('text').style.display="block";
}

function clearText(){
  if(currentStep = 3){
    document.getElementById('text').style.display="none";
    document.getElementById("modalBody").classList.add("modal-xl");
    document.getElementById("close").style.display="none";
  }
}

function pageError(){
  var inputName = document.getElementById('name').value;
  var inputEmail = document.getElementById('email').value;
  var inputPhone = document.getElementById('phone').value;
  var lblError = document.getElementById('lblError').value;
  var lblNum = document.getElementById("errorNum").value;
  if(inputName === "" || inputEmail === "" || inputPhone === "" ||  !phonenumber(inputPhone) || !IsValidEmail(inputEmail)){
    document.getElementById('oneerror').innerText = "*Input All Fields";
  } else {
    document.getElementById('oneerror').innerText = "";
    nextStep();
  }
}

function clearPageError(){
  document.getElementById('oneerror').innerText = "";
}