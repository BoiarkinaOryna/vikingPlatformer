import Character from "/modules/character.js";
import Sprite from "/modules/settings.js";

function createMap(listMap){
    let listElem = [];
    let x = 0;
    let y = 0;
    let hero;

    for (let row of listMap){
        for (let cell of row){
            switch (cell){
                case "1":
                    let block = new Sprite(x, y, 100, 100, "../images/1stWorldBlock.png");
                    listElem.push(block);
                    break;
                
                case "h":
                    hero = new Character(x, y, 60, 90, "../images/character1.png", "img", 30, 5, "Георгій")
                    break;

            };
            x += 100;
        };
        y += 100;
        x = 0;
    };

    return [listElem, hero];
};

export default createMap;