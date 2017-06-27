const ul = document.createElement('ul')

function update(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const colorName = f.color.value
    const heading = document.querySelector('h1')
    const ul = document.createElement('ul')
    const stats = document.querySelector('#stats')
    const nameItem = document.createElement('li')
    const colorItem = document.createElement('li')
    nameItem.textContent = name
    colorItem.textContent = colorName
    stats.appendChild(ul)
    ul.appendChild(nameItem)
    ul.appendChild(colorItem)
    ul.querySelector('li').style.color = colorName
    heading.textContent = name
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', update)