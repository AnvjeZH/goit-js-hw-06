const inputEl = document.getElementById('name-input')
const outputEl = document.getElementById('name-output')

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value) {
      return outputEl.textContent = event.currentTarget.value  
    }
        return outputEl.textContent = 'Anonymous'
}