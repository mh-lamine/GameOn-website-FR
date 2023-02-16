function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fonctionnalité bouton (x)

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", closeModal); 

function closeModal() {
  modalbg.style.display = "none"; // ajoute le style display: none; à la classe modalbg
}

// verification des champs

function setError(element, message) {
  const formData = element.parentElement; // prend la div parente de l'element
  const errorMsg = formData.querySelector(".error"); // prend la div de classe error presente dans la div de l'element
  errorMsg.innerText = message; // affiche le message d'erreur
}

function hideErrorMsg(element) {
  const formData = element.parentElement; 
  const errorMsg = formData.querySelector(".error");
  errorMsg.innerText = ""; // efface le mesqsage d'erreur
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); // verifie que le format de l'adresse mail est valide
}

function validateInputs(){
  let errorCount = 0;
  const firstValue = document.getElementById("first").value.trim();
  const lastValue = document.getElementById("last").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate");
  const cu = document.getElementById("checkbox1");
    
  if (firstValue === "") {
    setError(first, "Veuillez entrer un prénom");
    errorCount++;
  } else if (firstValue.length < 2) {
    setError(first, "Veuillez entrer 2 caractères ou plus pour le champ de prénom");
    errorCount++;
  }
    
  if (lastValue === "") {
    setError(last, "Veuillez entrer un nom");
    errorCount++;
  } else if (lastValue.length < 2) {
    setError(last, "Veuillez entrer 2 caractères ou plus pour le champ de nom");
    errorCount++;
  }
  
  if (emailValue === "") {
    setError(email, "Veuillez entrer une adresse mail");
    errorCount++;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Veuillez entrer une adresse mail valide");
    errorCount++;
  }

  if (!cu.checked) {
    setError(cu, "Veuillez accepter les conditions d'utilisation");
    errorCount++;
  }
  if ( errorCount == 0 ){
    return true;
  }
  return false;
}

const form = document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault(); // bloque la soumission automatique du formulaire
  if (validateInputs()){
    document.getElementById("form-card").innerHTML = "Merci ! Votre réservation a été reçue."; 
    // affiche le message de reussite si toutes les entrées sont valides
  };

});
