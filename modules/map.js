import Character from "/modules/character.js";
import Sprite from "/modules/settings.js";
import Npc from "/modules/npc.js";

function createMap(listMap){
    let listElem = [];
    let x = 0;
    let y = 0;
    let hero;
    let npc;

    for (let row of listMap){
        for (let cell of row){
            switch (cell){
                case "1":
                    let block = new Sprite(x, y, 100, 100, "../images/1stWorldBlock.png");
                    listElem.push(block);
                    break;
                
                case "n":
                    npc = new Npc(x, y, 60, 100, "./images/vikingNPC.png", "img", "Ben")
                    break;

                case "h":
                    hero = new Character(x, y, 60, 120, "../images/character1.png", "img", 30, 5, "Георгій")
                    break;

            };
            x += 100;
        };
        y += 100;
        x = 0;
    };

    return [listElem, hero, npc];
};

export default createMap;