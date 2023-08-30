import Sprite from "/modules/settings.js";
import Dialogs from '/modules/dialog.js';
import Character from "/modules/character.js";

class Npc extends Sprite{
    constructor(x, y, width, height, imgPath, elementName, name){
        super(x, y, width, height, imgPath, elementName);
        this.NAME = name;
        this.IMG_NUM = 1;
        this.CHAT;
        this.REPLIC_NUM = 0;
        this.PARAGRAPH = document.createElement("p");
    }
    dialog(key, array, hero, listNpc){
        if (key == "KeyF"){
            let collRight = hero.collisionRight(listNpc);
            let collLeft = hero.collisionLeft(listNpc);
            if (collRight == true || collLeft == true){
                this.REPLIC_NUM += 1;
                this.CHAT == new Sprite(0, 700, document.body.clientWidth, document.body.clientHeight - 700, "./images/chat.png");
                if (array[this.REPLIC_NUM] != undefined){
                    this.PARAGRAPH.innerText = array[this.REPLIC_NUM];
                } else{
                    this.REPLIC_NUM = 0;
                }
                document.body.append(this.PARAGRAPH);
                console.log("Параграф створено");
            }
        };
    };
}



export default Npc;