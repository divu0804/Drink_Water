const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const how_many_glass = document.querySelectorAll('.large-glass');
const fill = document.querySelector('#litres');

let totalLitres = 3;
let currentLitres = 0;

updateBigCup();

how_many_glass.forEach((glass, idx) => {
    glass.addEventListener('click', () => convertToSmallGlass(idx));
});

function convertToSmallGlass(index) {
    if (how_many_glass[index].classList.contains('small')) {
        how_many_glass[index].classList.remove('small');
        currentLitres -= 0.5;
    } else {
        how_many_glass[index].classList.add('small');
        currentLitres += 0.5;
    }

    updateBigCup();
}

function updateBigCup() {
    let percent = (currentLitres / totalLitres) * 100;
    let percentageHeight = (350 * percent) / 100;
    let remainedHeight = 350 - percentageHeight;

    if (percent >= 100) {
        remained.style.visibility = 'hidden';
        percentage.style.visibility = 'visible';
        currentLitres = totalLitres; // Limit the total to 3 litres
    } else if (percent <= 0) {
        remained.style.visibility = 'visible';
        percentage.style.visibility = 'hidden';
        currentLitres = 0; // Limit the total to 0 litres
    } else {
        remained.style.visibility = 'visible';
        percentage.style.visibility = 'visible';
    }

    fill.innerText = `${totalLitres - currentLitres}L`;
    remained.style.height = `${remainedHeight}px`;
    percentage.style.height = `${percentageHeight}px`;
    percentage.innerText = `${percent}%`;

    console.log(percent);
}
