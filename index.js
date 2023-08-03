const wrapItems = document.querySelectorAll('.animate');

const images = [
    "img/2nd/partners-logo-adoria.svg",
    "img/2nd/partners-logo-baltic-assembly.svg",
    "img/2nd/partners-logo-bwt.svg",
    "img/2nd/partners-logo-cenu-banka.svg",
    "img/2nd/partners-logo-drosi-seifi.svg",
    "img/2nd/partners-logo-fortuna-travel.svg",
    "img/2nd/partners-logo-justfly.svg",
    "img/2nd/partners-logo-latvijas-nafta.svg",
    "img/2nd/partners-logo-linneja.svg",
    "img/2nd/partners-logo-loguvirs.svg",
    "img/2nd/partners-logo-m79.svg",
    "img/2nd/partners-logo-mfd.svg",
    "img/2nd/partners-logo-nolikava.svg",
    "img/2nd/partners-logo-posthaul.svg",
    "img/2nd/partners-logo-timbermarket.svg",
    "img/2nd/partners-logo-tourdecrafts.svg",
    "img/2nd/partners-logo-watex.svg",
];

let previousNumbers = [];
let counter = images.length - 1

wrapItems.forEach((item, index) => {
    if (index < images.length) {
        item.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
    }
});

function getRandomNumber(min, max) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (previousNumbers.includes(randomNumber));

    previousNumbers.push(randomNumber);

    if (previousNumbers.length === wrapItems.length) {
        previousNumbers = [];
    }

    return randomNumber;
}

function outputRandomNumber() {
    const randomBlockNumber = getRandomNumber(0, wrapItems.length - 1);
    wrapItems.forEach((item, index) => {
        if (index === randomBlockNumber) {
            item.innerHTML = `<img src="${images[counter]}">`;
        }
    });

   return counter = counter === 0 ? images.length - 1 : counter - 1
}

setInterval(outputRandomNumber, 1200);



