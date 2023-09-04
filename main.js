import createMap from "./modules/map.js";
import viking from "./modules/dialog.js";
import Npc from "./modules/Npc.js";
let keyPressed = {};

let map = [
    "00000000000000000".split(""),
    "00000000000111110".split(""),
    "00000000000000000".split(""),
    "00011000000000000".split(""),
    "000000000n0000000".split(""),
    "11h00e01111111111".split(""),
    "01111111000000000".split(""),
    "00000000000000000".split(""),
    "00000000000000000".split("")
]
// 0 - нічого
// 1 - блок
// h - герой
// e - ворог

let [listElem, hero, listNpc, listEnemies] = createMap(map)

function gameLoop(){
    setTimeout(gameLoop, 16.6);
    hero.move(listElem, keyPressed)
    for (let enemy of listEnemies){
        enemy.enemyMove(listElem);
    }
    // npc.dialog()
}

gameLoop();

document.addEventListener("keydown", (event) => {
    let key = event.code;
    keyPressed[key] = true;
    if (keyPressed["KeyW"] == true){
        hero.IMG_PATH = `../images/characterJump.png`;
        hero.ELEMENT.src = hero.IMG_PATH;
    }
    for (let npc of listNpc){
        npc.dialog(key, viking, hero, listNpc);
    }
});

document.addEventListener("keyup", (event) => {
    let key = event.code;
    keyPressed[key] = false;
    hero.IMG_NUM = 2;
    hero.IMG_PATH = `../images/character1.png`;
    hero.ELEMENT.src = hero.IMG_PATH;
});

document.addEventListener("click", (event) => {
    hero.strike(listEnemies);
});

