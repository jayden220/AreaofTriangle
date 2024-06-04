let height = document.querySelectorAll('input')[0]
let base = document.querySelectorAll('input')[1]
let area = document.getElementsByClassName('answer')[0]
let calculate = document.getElementsByTagName('button')[0]

calculate.addEventListener('click', calVal)

function calVal() {
    let answer = 0.5 * base.value * height.value
    area.innerHTML = `${answer} is the area of the triangle`
}


