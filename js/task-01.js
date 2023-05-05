const itemsEl = document.querySelectorAll('.item')

// console.log(`Number of categories: ${itemsEl.length}`)

let countItem = 0

itemsEl.forEach(el => {
    countItem++
})
    console.log(`Number of categories: ${countItem}`)

itemsEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Element: ${el.lastElementChild.children.length}`)
})
