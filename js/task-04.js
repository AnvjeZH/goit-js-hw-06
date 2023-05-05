const counter = {
    value: 0,
    decrement() {
        this.value -= 1
    },
    increment() {
        this.value += 1
    }
}
const valueEl = document.querySelector('#value')
const decrementEl = document.querySelector('button[data-action="decrement"]')
const incrementEl = document.querySelector('button[data-action="increment"]')



decrementEl.addEventListener('click', function () {

    counter.decrement();
    valueEl.textContent = counter.value;
})

incrementEl.addEventListener('click', function () {

    counter.increment();
    valueEl.textContent = counter.value;
})