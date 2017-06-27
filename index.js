const ul = document.createElement('ul')

function updateHeading(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
  const heading = document.querySelector('h1')
  heading.textContent = name
}


function updateDiv(ev){
ev.preventDefault()
const f = event.target
const name = f.personName.value
const stats = document.querySelector('#stats')
const nameItem = document.createElement('li')
nameItem.textContent = name
ul.appendChild(nameItem)
stats.appendChild(ul)
}

function updateColor(ev){
ev.preventDefault()
const f = event.target
const colorName = f.color.value
const stats = document.querySelector("#stats")
const colorItem = document.createElement('li')
/*const colorDiv = document.createElement('div')
colordiv.style.backgroundColor = colorName
colorDiv.style.width = '6rem'
colorDiv.style.height = '3rem'*/
colorItem.textContent = colorName
ul.appendChild(colorItem)
stats.appendChild(ul)
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)
personForm.addEventListener('submit', updateDiv)

const secondForm = document.querySelector('#secondForm')
secondForm.addEventListener('submit', updateColor)