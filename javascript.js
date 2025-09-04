let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('dark-light')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  document.body.classList.remove('lightmode')

  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  document.body.classList.add('lightmode')

  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()
  else disableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})