

function handleSubmit(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const colorName = f.color.value
    const colorItem = 'aaa'
    const nameItem = 'aaa'
    const heading = document.querySelector('h1')
    const stats = document.querySelector('#stats')
    stats.appendChild(renderList(nameItem, name, colorItem, colorName))    
    heading.textContent = name
}

function renderColor(a) {
  const colorListItems = a
  return colorListItems
}

function renderListItem(a, b) {
  a = document.createElement('li')

  a.textContent = b

  return a
}

function renderList(a, b, c, d) {
  const list = document.createElement('ul')
  list.appendChild(renderListItem(a, b))
  list.appendChild(renderListItem(c, d))
  list.querySelector('li').style.color = renderColor(d)
  return list
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)