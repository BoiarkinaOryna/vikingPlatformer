import Character from "./modules/character.js";
import createMap from "./modules/map.js";

let keyPressed = {};

let map = [
    "00000000000000000".split(""),
    "00000000000111110".split(""),
    "00000000000000000".split(""),
    "00011000000000000".split(""),
    "000h000000n000000".split(""),
    "11111000111111111".split(""),
    "00000000000000000".split(""),
    "00000111000000000".split(""),
    "00000000000000000".split(""),
]
// 0 - нічого
// 1 - блок
// h - герой
// e - ворог

let [listElem, hero] = createMap(map)

function gameLoop(){
    setTimeout(gameLoop, 16.6);
    hero.move(listElem, keyPressed)
}

gameLoop();

document.addEventListener("keydown", (event) => {
    let key = event.code;
    keyPressed[key] = true;
});

document.addEventListener("keyup", (event) => {
    let key = event.code;
    keyPressed[key] = false;
    hero.IMG_NUM = 2;
    hero.IMG_PATH = `../images/character1.png`;
    hero.ELEMENT.src = hero.IMG_PATH;
});