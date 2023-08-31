import Character from "/modules/character.js";
import Sprite from "/modules/settings.js";
import Npc from "/modules/npc.js";
import Enemy from '/modules/enemy.js';

function createMap(listMap){
    let listElem = [];
    let listNpc = [];
    let listEnemies = [];
    let x = 0;
    let y = 0;
    let hero;
    let npc;
    let enemy;

    for (let row of listMap){
        for (let cell of row){
            switch (cell){
                case "1":
                    let block = new Sprite(x, y, 100, 100, "../images/1stWorldBlock.png");
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
                    enemy = new Enemy(x, y + 20, 60, 80, "../images/Elf.png", "img");
                    listEnemies.push(enemy);
                    break;
                

            };
            x += 100;
        };
        y += 100;
        x = 0;
    };

    return [listElem, hero, listNpc, listEnemies];
};

export default createMap;