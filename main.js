import { listElem, hero, listNpc, listEnemies, listTeleport, createMap, nextLevel } from "./modules/map.js";
let keyPressed = {};


createMap();

function gameLoop(){
    // console.log(hero);
    setTimeout(gameLoop, 16.6);
    hero.move(listElem, keyPressed);
    for (let enemy of listEnemies){
        console.log("hero.X =", hero.X);
        console.log("hero.Y =", hero.Y);
        enemy.enemyMove(listElem, hero);
    }
    nextLevel();
    hero.showDialog(listNpc);
       
}
gameLoop();


// document.body.classList.add("level1");
document.addEventListener("keydown", (event) => {
    let key = event.code;
    keyPressed[key] = true;
    if (keyPressed["KeyW"] == true){
        hero.IMG_PATH = `../images/characterJump.png`;
        hero.ELEMENT.src = hero.IMG_PATH;
    }
    if (hero.X >= 813 && hero.X <= 963 && hero.Y == 77.6){
        listNpc[0].dialog(keyPressed, hero);
    }else if (hero.X >= 1213 && hero.X <= 1363 && hero.Y == 373.9999999999999){
        listNpc[1].dialog(keyPressed, hero);
    }else if (hero.X >= 1213 && hero.X <= 1263 && hero.Y == 373.9999999999999){
        listNpc[0].dialog(keyPressed, hero);
    }
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





