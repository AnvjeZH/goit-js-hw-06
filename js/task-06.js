const inputEl = document.getElementById('validation-input')
inputEl.addEventListener('blur', () => {
      const inputLength = Number(inputEl.dataset.length)
      const currentLength = inputEl.value.length
            if (inputLength === currentLength) {
            inputEl.classList.add('valid')
            inputEl.classList.remove('invalid')
            } else {
            inputEl.classList.remove('valid')
            inputEl.classList.add('invalid')
            }
    })

      

