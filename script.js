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
  const form = document.getElementsByTagName("form")[0];

  const email = document.getElementById("mail");
  const emailError = document.querySelector("#mail + span.error");
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

  email.addEventListener("input", function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.innerHTML = ""; // Reset the content of the message
      emailError.className = "error"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  form.addEventListener("submit", function (event) {
    // if the form contains valid data, we let it submit

    if (!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address
      // display the following error message.
      emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
      // If the data is too short
      // display the following error message.
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    // Set the styling appropriately
    emailError.className = "error active";
  }
});

function validateForm() {
  let containsErrors = false;
  const petitionInputs = document.querySelectorAll(".petition-form input");

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // If there are no errors, call addSignature()
  if (!containsErrors) {
    addSignature();
  }
}

function addSignature() {
  const name = document.getElementById("name").value;
  const hometown = document.getElementById("hometown").value;
  const supportDiv = document.querySelector(".support");

  const newSupporter = document.createElement("p");
  newSupporter.textContent = `✅ ${name} from ${hometown} supports this cause.`;
  supportDiv.appendChild(newSupporter);
}