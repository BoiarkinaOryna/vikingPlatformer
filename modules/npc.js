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
        this.PARAGRAPH.classList.add("chat-text");
        this.CHAT_LIST = document.getElementsByClassName("chat");

    }
    dialog(key, array, hero, listNpc){
        if (key == "KeyF"){
            let collRight = hero.collisionRight(listNpc);
            let collLeft = hero.collisionLeft(listNpc);
            if (collRight == true || collLeft == true){
                this.REPLIC_NUM += 1;
                this.CHAT = new Sprite(0, 700, document.body.clientWidth, document.body.clientHeight - 700, "./images/chat.png");
                this.CHAT.ELEMENT.classList.add("chat");
                if (array[this.REPLIC_NUM] != undefined){
                    console.log(array[this.REPLIC_NUM])
                    let [whoTalks, text] = array[this.REPLIC_NUM].split(":");
                    console.log(text);
                    this.PARAGRAPH.innerText = text;
                    if (whoTalks == "v"){
                        let profile = new Sprite(200, 720, 150, 150, "./images/vikProfile.png");
                        profile.ELEMENT.classList.add("chat");
                    }
                    if (whoTalks == "c"){
                        let profile = new Sprite(200, 720, 150, 150, "./images/chProfile.png");
                        profile.ELEMENT.classList.add("chat");
                    } 
                        
                    } else{
                        this.REPLIC_NUM = 0;
                        try{
                            for(let elem of document.getElementsByClassName("chat")){
                                elem.remove();
                            }
        
                            // document.querySelector(".chat-text").innerText = "";
        
                        } catch{
                            "pass";
                        };
                    }
                    document.body.append(this.PARAGRAPH);
                    // console.log("Параграф створено");
            } else{
                try{
                    for (let elem of document.getElementsByClassName("chat")){
                        elem.remove();
                    }

                    // document.querySelector(".chat-text").innerText = "";

                } catch{
                    "pass";
                };
            };
        }
        
        else{
            try{
                for(let elem of document.getElementsByClassName("chat")){
                    elem.remove();
                }

                document.querySelector(".chat-text").innerText = "";

            } catch{
                "pass";
            }
        }
        
    };
}



export default Npc;