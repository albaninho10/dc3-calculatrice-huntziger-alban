let buttons = document.getElementsByClassName('button')
console.log(buttons)

buttons.addEventListener('click', (e) => {
    const value = e.target.textContent;
    calculer(value)
})

const calculer = (value) => {
    console.log(value)
}