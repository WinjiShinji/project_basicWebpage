let getKey = localStorage.getItem("darkmode")

// ---- Light / Dark Mode Scripts ---- //
const lightEl = document.querySelectorAll('.light')
const lightModeSun = document.querySelector('.light-mode-sun')
const lightModeMoon = document.querySelector('.light-mode-moon')

// Light Mode Handler
function darkTheme() {
  lightEl.forEach( element => {
    element.classList.add('dark')
  })
  lightModeSun.classList.add('active')
  lightModeMoon.classList.remove('active')
  localStorage.setItem('darkmode', "dark")
}

function lightTheme() {
  lightEl.forEach( element => {
    element.classList.remove('dark')
  })
  lightModeSun.classList.remove('active')
  lightModeMoon.classList.add('active')
  localStorage.setItem("darkmode", "light")
}

// Light Mode Check
let darkMode = getKey
const lightModeCheck = () => {
  if (darkMode == "dark") {
    darkTheme()
  } else if (darkMode == "light") {
    lightTheme()
  } else {
    lightTheme()
    localStorage.setItem('darkmode', 'light')
  }
}

// Light Click Event 
window.onload = lightModeCheck
lightModeMoon.addEventListener('click', darkTheme)
lightModeSun.addEventListener('click', lightTheme)


// ---- Side Hamburger Menu ---- //
const nav = document.querySelector('.nav')
const sideMenu = document.querySelector('.nav-side-menu')
const hamburgerMenuBtn = document.querySelector('.hamburger-menu')

hamburgerMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  sideMenu.classList.toggle('active')
  hamburgerMenuBtn.classList.toggle('active')
})





