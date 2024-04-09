document.addEventListener("DOMContentLoaded", function () {
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

  // Validation Form

  // First, get the button and the modal by their IDs
  var btn = document.querySelector(".petitionBtn .btn");
  var modal = document.getElementById("petitionModal");

  // Then, add an event listener to the button
  btn.addEventListener("click", function () {
    // When the button is clicked, change the display style of the modal to "block"
    modal.style.display = "block";
  });

  // First, get the close button by its class
  var closeBtn = document.querySelector(".close");

  // Then, add an event listener to the close button
  closeBtn.addEventListener("click", function () {
    // When the close button is clicked, change the display style of the modal to "none"
    modal.style.display = "none";
  });


});

function validateForm(event) {
  event.preventDefault();
  let containsErrors = false;
  const petitionInputs = document.querySelectorAll(".petition-form input");
  // Assuming petitionForm is the form to submit
const petitionForm = document.querySelector(".petition-form");

// Attach the event listener to the 'submit' event of the form
petitionForm.addEventListener('submit', validateForm);

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // If there are no errors, call addSignature() and clear the form
  if (!containsErrors) {
    addSignature();

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    containsErrors = false;
  }
}

signNowButton.addEventListener('click', validateForm);

function addSignature() {
  const name = document.getElementById("name").value;
  const hometown = document.getElementById("hometown").value;
  const supportDiv = document.querySelector(".support");

  const newSupporter = document.createElement("p");
  newSupporter.textContent = `✅ ${name} from ${hometown} supports this cause.`;
  supportDiv.appendChild(newSupporter);
}