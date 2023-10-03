import { listElem, hero, listNpc, listEnemies, listTeleport, createMap, nextLevel } from "./modules/map.js";
import { writeIntoLocalStorage, getFromLocalStorage } from "./modules/write_json.js";
let keyPressed = {};

const form = document.querySelector("form");
const submitBtn = document.getElementById("submit");
const submitLogin = document.getElementById("login-submit")

writeIntoLocalStorage("user1", JSON.stringify(["password", "email"]));
console.log(getFromLocalStorage("user1"));
let registration = false;
createMap();

function gameLoop(){
   
    setTimeout(gameLoop, 16.6);
    hero.move(listElem, keyPressed);
    for (let enemy of listEnemies){
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
    for (let npc of listNpc){
        
        npc.dialog(keyPressed, hero, listNpc);
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


    // submitBtn.querySelector("click", (event) =>{
    //     writeIntoLocalStorage(form.name.value, form.password.value);
    //     submitBtn.id = "submitLogin";
    //     document.querySelector("h1").innerText = "Login";
    // });
   

// submitLogin
