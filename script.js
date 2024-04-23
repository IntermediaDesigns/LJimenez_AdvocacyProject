// Toggle dark mode class
function darkMode () {
  document.body.classList.toggle('dark-mode')
  document.getElementById('myNavbar').classList.toggle('dark-mode-navbar')
}

// Modal Image Gallery
function onClick (element) {
  document.getElementById('img01').src = element.src
  document.getElementById('modal01').style.display = 'block'
  var captionText = document.getElementById('caption')
  captionText.innerHTML = element.alt
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById('mySidebar')

function w3_open () {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none'
  } else {
    mySidebar.style.display = 'block'
  }
}

// Close the sidebar with the close button
function w3_close () {
  mySidebar.style.display = 'none'
}
function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Validation Form

// First, get the button and the petition modal by their IDs
var btn = document.querySelector('.petitionBtn .btn')
var petitionModal = document.getElementById('petitionModal')

// Then, add an event listener to the button
btn.addEventListener('click', function () {
  // When the button is clicked, change the display style of the petition modal to "block"
  petitionModal.style.display = 'block'
})

// Get the submit modal and the close button by their classes
var petitionModal = document.getElementById('petitionModal')
var closeBtn = document.querySelector('.close')

// Then, add an event listener to the close button
closeBtn.addEventListener('click', function () {
  // When the close button is clicked, change the display style of the submit modal to "none"
  petitionModal.style.display = 'none'
})

// Get the submit modal
var submitModal = document.querySelector('.submit-modal')

function validateForm (event) {
  event.preventDefault()
  let containsErrors = false
  const petitionInputs = document.querySelectorAll('.petition-form input')
  let name, hometown

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true
      petitionInputs[i].classList.add('error')
    } else {
      petitionInputs[i].classList.remove('error')
      if (petitionInputs[i].name === 'name') {
        name = petitionInputs[i].value
      } else if (petitionInputs[i].name === 'hometown') {
        hometown = petitionInputs[i].value
      }
    }
  }
  const signButton = document.getElementById('signButton')
  // Select the errorText div
  const errorText = document.querySelector('.errorText')

  // Add an event listener to the signButton
  signButton.addEventListener('click', function () {
    // Clear the errorText when the signButton is clicked
    errorText.textContent = ''
  })

  // Add an event listener to each input field
  petitionInputs.forEach(function (input) {
    input.addEventListener('click', function () {
      // Clear the errorText when an input field is clicked
      errorText.textContent = ''
    })
  })

  // If there are errors, show the error message
  if (containsErrors) {
    errorText.textContent = 'You must enter all fields to submit.'
    errorText.style.color = 'red'
  } else {
    // If there are no errors, call addSignature(), show the modal, and clear the form
    addSignature(name, hometown)

    // Show the modal
    submitModal.style.display = 'block'

    // Hide the modal after 10 seconds
    setTimeout(function () {
      submitModal.style.display = 'none'
    }, 10000)

    // Clear the error message
    errorText.textContent = ''
  }
}

const signNowButton = document.getElementById('signButton')
const petitionForm = document.querySelector('.petition-form')
signNowButton.addEventListener('click', validateForm)
// Assuming petitionForm is already defined
petitionForm.addEventListener('submit', validateForm)

let totalSignatures = 0
let emails = [] // Array to store emails

function addSignature () {
  const name = document.getElementById('name').value
  const hometown = document.getElementById('hometown').value
  const email = document.getElementById('email').value // Assuming there's an input field with id="email"
  const supportDiv = document.querySelector('.support')

  // Check if the email is already in the array
  if (emails.includes(email)) {
    // If it is, display an error message and return
    alert('This email has already been used to sign the petition.')
    return
  }

  // If the email is not in the array, add it
  emails.push(email)

  const newSupporter = document.createElement('p')
  newSupporter.textContent = `✅ ${name} from ${hometown} supports this cause.`
  supportDiv.appendChild(newSupporter)

  const numSignatures = document.getElementById('numSignatures')
  totalSignatures++
  numSignatures.innerHTML = `Total Signatures: ${totalSignatures}`

  // Select the submitText element and update its text content
  const submitText = document.querySelector('.submitText')
  submitText.textContent = `Thank you ${name} from ${hometown} for signing our petition! Your support gives a chance for children to learn coding.`

  // Clear the form
  const petitionInputs = document.querySelectorAll('.petition-form input')
  petitionInputs.forEach(function (input) {
    input.value = ''
  })
}

let animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './img/animation.json' // the path to the animation json
})


// Select the closeSubmitModal button
const closeSubmitModalButton = document.getElementById('closeSubmitModal')

// Add an event listener to the closeSubmitModal button
closeSubmitModalButton.addEventListener('click', function () {
  // Select the submitModal
  const submitModal = document.querySelector('.submit-modal')

  // Hide the submitModal when the closeSubmitModal button is clicked
  submitModal.style.display = 'none'
})

// Select all the sections you want to animate
const sections = document.querySelectorAll('.fade-in-section');

window.addEventListener('scroll', function() {
  sections.forEach(function(section) {
    const top = section.getBoundingClientRect().top;

    // If the top of the section is in the viewport, change its opacity to 1
    if (top >= 0 && top < window.innerHeight) {
      section.style.opacity = '1';
    } else {
      section.style.opacity = '0';
    }
  });
});