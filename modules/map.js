import Character from "/modules/character.js";
import Sprite from "/modules/settings.js";
import Npc from "/modules/npc.js";
import Enemy from '/modules/enemy.js';
import {map1, map2} from '/modules/listMap.js';

export let currentLocation = 0;
export let listElem = [];
export let listNpc = [];
export let listEnemies = [];
export let listTeleport = [];
export let hero;
export let npc;
export let enemy;
export let teleport;

export function nextLevel(){
    let colRight = hero.collisionRight(listTeleport);
    let colLeft = hero.collisionLeft(listTeleport);
    let colUp = hero.collisionUp(listTeleport);
    let colDown = hero.collisionDown(listTeleport);

    if (colRight == true || colLeft == true || colDown == true || colUp == true){
        currentLocation++;
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

        listElem = [];
        listEnemies = [];
        listNpc = [];
        listTeleport = [];
        hero = null;

        createMap()
    }    
}


let map = [map1, map2];

export function createMap(){
    let x = 0;
    let y = 0;
    for (let row of map[currentLocation]){
        for (let cell of row){
            switch (cell){
                case "1":
                    let block = new Sprite(x, y, 98.8, 98.8, "../images/1stWorldBlock.png");
                    block.ELEMENT.classList.add("block")
                    listElem.push(block);
                    break;
                
                case "n":
                    npc = new Npc(x, y - 20, 70, 120, "./images/vikingNPC.png", "img", "Ікінг");
                    listNpc.push(npc);
                    break;

                case "h":
                    hero = new Character(x, y - 20, 70, 120, "../images/character1.png", "img", 30, 5, "Георгій")
                    break;
                case "e":
                    enemy = new Enemy(x, y + 20, 60, 80, "../images/Elf.png", "img", 300, 1);
                    listEnemies.push(enemy);
                    break;
                case "d":
                    teleport = new Sprite(x - 10, y - 50, 110, 150, "../images/door.png");
                    listTeleport.push(teleport);
                    break;


            };
            x += 98.8;
        };
        y += 98.8;
        x = 0;
    };
};

