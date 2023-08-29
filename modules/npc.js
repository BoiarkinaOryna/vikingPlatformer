import Sprite from "/modules/settings.js";
import Dialogs from '/modules/dialog.js';
import Character from "/modules/character.js";

class Npc extends Sprite{
    constructor(x, y, width, height, imgPath, elementName, name){
        super(x, y, width, height, imgPath, elementName);
        this.NAME = name;
        this.IMG_NUM = 1;
        this.CHAT;
    }
    dialog(){
        
        let text = new Dialogs;
        // console.log(text.A);
        for(let repl of text.TEXT){
            let [whoTalks, p] = repl.split(':');

            this.CHAT = new Sprite(0, 700, document.body.clientWidth, document.body.clientHeight - 700, "./images/chat.png");
            this.CHAT.ELEMENT.classList.add("chat");
            // console.log(whoTalks, p);
            // console.log(this.replica);
            this.replica(whoTalks, p);
    }}
    replica(whoTalks, p){
        if (whoTalks == "n"){
            let par = document.createElement("p");
            // par.style.textAlign = "center";
            // par.style.textIndent = `${this.CHAT.Y + 20}px`;
            par.innerText = p;

            document.querySelector(".chat").append(par);
        }
    }
}

export default Npc;