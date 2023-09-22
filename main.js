
import viking from "./modules/dialog.js";

import { listElem, hero, listNpc, listEnemies, listTeleport, createMap, nextLevel } from "./modules/map.js";
let keyPressed = {};



createMap();

function gameLoop(){
    console.log(hero.Y);
    // if (hero.collisionDown == false){
    //     hero.Y -= Math.min(5, (hero.FALL_COUNT / 16.6) * hero.FALL_SPEED);
    //     hero.ELEMENT.style.top = `${hero.Y}px`;
    //     hero.FALL_COUNT++;
    // }
    setTimeout(gameLoop, 16.6);
    hero.move(listElem, keyPressed);
    for (let enemy of listEnemies){
        enemy.enemyMove(listElem);
    }
    nextLevel();
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
    // let rectBody = innerWidth;
    // console.log(rectBody)
});

document.addEventListener("keyup", (event) => {
    let key = event.code;
    keyPressed[key] = false;
    hero.IMG_NUM = 2;
    hero.IMG_PATH = `../images/character1.png`;
    hero.ELEMENT.src = hero.IMG_PATH;
    hero.IDLE = true;
});

document.addEventListener("click", (event) => {
    // hero.STATUS = "attacking";
    hero.strike(listEnemies);
});

