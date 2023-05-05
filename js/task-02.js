const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
 
const markup = ingredients.map(el => {
  const itemEl = document.createElement('li')
  itemEl.textContent = el
  itemEl.classList.add('item')
  return itemEl
})

listEl.append(...markup)
console.log(listEl)

