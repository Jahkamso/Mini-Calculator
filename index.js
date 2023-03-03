const button = document.querySelectorAll('button')
const display = document.querySelector('display')

button.addEventListener('click', function click() {
    display.innHTML = button.innHTML
    console.log("buttons clicked");
})