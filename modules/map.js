import Character from "/modules/character.js";
import Sprite from "/modules/settings.js";
import Npc from "/modules/npc.js";
import Enemy from '/modules/enemy.js';
import {map1, map2, map3} from '/modules/listMap.js';
import {viking, friend1, shaman1} from '/modules/dialog.js';

export let currentLevel = 0;
export let listElem = [];
export let listNpc = [];
export let listEnemies = [];
export let listTeleport = [];
export let hero;
export let npc;
export let enemy;
export let teleport;
export let iking;
export let mykola;
export let shaman;

export function nextLevel(){
    let colRight = hero.collisionRight(listTeleport);
    let colLeft = hero.collisionLeft(listTeleport);
    let colUp = hero.collisionUp(listTeleport);
    let colDown = hero.collisionDown(listTeleport);

    if (colRight == true || colLeft == true || colDown == true || colUp == true){
        currentLevel++;
        for (let block of listElem){
            block.ELEMENT.remove();
        };
        for (let enemy of listEnemies){
            enemy.ELEMENT.remove();
        };
        for (let npc of listNpc){
            npc.ELEMENT.remove();
        };
        for (let door of listTeleport){
            door.ELEMENT.remove();

        };
        hero.ELEMENT.remove();
        console.log(document.body.classList.contains("level0"));
        document.body.classList.remove(`level${currentLevel-1}`);
        document.body.classList.add(`level${currentLevel}`);
        console.log(document.body.classList.contains("level0"));
        listElem = [];
        listEnemies = [];
        listNpc = [];
        listTeleport = [];
        hero = null;

        createMap()
    }    
}

let map = [map1, map2, map3];
// let map = [map2, map3, map1];
export function createMap(){
    let x = 0;
    let y = 0;
    try{
        for (let row of map[currentLevel]){
            for (let cell of row){
                switch (cell){
                    case "1":
                        let block = new Sprite(x, y, 98.8, 98.8, "../images/1stWorldBlock.png");
                        block.ELEMENT.classList.add("block")
                        listElem.push(block);
                        break;
                    
                    case "i":
                        iking = new Npc(x, y - 20, 70, 120, "./images/vikingNPC.png", "img", "Ікінг", viking);
                        listNpc.push(iking);
                        iking.ELEMENT.classList.add("npc");
                        break;

                    case "h":
                        hero = new Character(x, y - 21.2, 70, 120, "../images/character1.png", "img", 30, 3, "Георгій");
                        break;
                    case "e":
                        enemy = new Enemy(x, y + 18.8, 60, 80, "../images/Elf.png", "img", 20, 8);
                        listEnemies.push(enemy);
                        break;
                    case "d":
                        teleport = new Sprite(x - 10, y - 50, 110, 150, "../images/door.png");
                        listTeleport.push(teleport);
                        break;
                    case "m":
                        mykola = new Npc(x, y - 20, 70, 120, "./images/MykolaNPC.png", "img", "Микола", friend1);
                        listNpc.push(mykola);
                        mykola.ELEMENT.classList.add("npc");
                        break;
                    case "t":
                        teleport = new Sprite(x, y - 150, 99, 250, "../images/tree.png");
                        break;
                    case "s":
                        shaman = new Npc(x, y - 30, 70, 130, "./images/ShamanNPC.png", "img", "Микола", shaman1);
                        listNpc.push(shaman);
                        shaman.ELEMENT.classList.add("npc");

                };
                x += 98.8;
            };
            y += 98.8;
            x = 0;
        };
    } catch{
        let toBeContinued = document.createElement("p");
        toBeContinued.innerText = "To be continued";
        toBeContinued.classList.add("tbc")
        document.body.append(toBeContinued);
    }
};

