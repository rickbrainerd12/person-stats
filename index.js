//const myList = new Array()

function updateHeading(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
  const heading = document.querySelector('h1')
  heading.textContent = name
  //heading.innerHtml = name
}

function updateDiv(ev){
ev.preventDefault()
const f = event.target
const name = f.personName.value
const stats = document.querySelector('#stats')
//myList.push(name)
//stats.textContent = myList
//stats.innerHTML = `<p>${name}`

const p = document.createElement('p')
p.textContent = `${name}`
stats.appendChild(p)
//p.setAttribut('id', name)
}

function updateColor(ev){
ev.preventDefault()
const f = event.target
const name = f.color.value
const stats = document.querySelector("#stats")
//myList.push(name)
//stats.textContent = myList  
//stats.innerHTML = `<p>${name}`

const p = document.createElement('p')
p.textContent = `${name}`
stats.appendChild(p)
//p.setAttribute('id', name)

document.querySelector('#stats').style.color = name
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)
personForm.addEventListener('submit', updateDiv)

const secondForm = document.querySelector('#secondForm')
secondForm.addEventListener('submit', updateColor)