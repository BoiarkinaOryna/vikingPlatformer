import Character from "./modules/character.js";
import createMap from "./modules/map.js";

let map = [
    "00000000000000000".split(""),
    "00000000000000000".split(""),
    "00000000000000000".split(""),
    "00000000000000000".split(""),
    "010h010000n000000".split(""),
    "11111111111111111".split(""),
    "00000000000000000".split(""),
    "00000000000000000".split(""),
    "00000000000000000".split(""),
]
// 0 - нічого
// 1 - блок
// h - герой
// e - ворог

let [listElem, hero] = createMap(map)

function gameLoop(){
    setTimeout(gameLoop, 16.6);
}

gameLoop();

document.addEventListener("keydown", (event) => {
    hero.move(event.code, listElem);
});

document.addEventListener("keyup", (event) => {
    hero.IMG_PATH = "/images/character1.png";
    hero.ELEMENT.src = hero.IMG_PATH;
});