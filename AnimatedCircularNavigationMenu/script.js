const toggle = document.querySelector('.toggle')
const root = document.querySelector('.root')

toggle.addEventListener('click', ()=> {
  root.classList.toggle('active')
})
