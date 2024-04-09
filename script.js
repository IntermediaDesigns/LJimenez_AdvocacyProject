document.addEventListener("DOMContentLoaded", function() {
// Toggle dark mode class
function darkMode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("myNavbar").classList.toggle("dark-mode-navbar");
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
  } else {
    mySidebar.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {
    addSignature();

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    containsErrors = false;
  }
}

signNowButton.addEventListener('click', validateForm);
















});