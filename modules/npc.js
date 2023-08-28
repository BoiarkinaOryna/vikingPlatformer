import Sprite from "/modules/settings.js";
import Dialogs from '/modules/dialog.js';
import Character from "/modules/character.js";

class Npc extends Sprite{
    constructor(x, y, width, height, imgPath, elementName, name){
        super(x, y, width, height, imgPath, elementName);
        this.NAME = name;
        this.IMG_NUM = 1;
    }
    dialog(){
        let text = new Dialogs;
        // console.log(text.A);
        for(let repl of text.A){
            let [whoTalks, p] = repl.split(':');
            console.log(whoTalks, p);
            console.log(this.replica);
            this.repcila(whoTalks, p);
    }}
    replica(whoTalks, p){
        if (whoTalks == "n"){
            let chat = new Sprite(this.X - 200, this.Y - 200, 180, 180, "./images/chat.png");
            par = document.createElement("p");
        }
    }
}

export default Npc;