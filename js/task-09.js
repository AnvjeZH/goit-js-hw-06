const bodyEl = document.body
const btnEl = document.querySelector('.change-color')
const textColorEl = document.querySelector('.color')

btnEl.addEventListener('click', onChangeBackroundColor)

function onChangeBackroundColor(event) {

bodyEl.style.backgroundColor = getRandomHexColor()
 const resultFn = getRandomHexColor()
textColorEl.textContent = resultFn
}

function getRandomHexColor() {  
return `#${Math.floor(Math.random() * 16777215)   
.toString(16)    
.padStart(6, 0)}`;
}

