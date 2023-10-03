import Sprite from "/modules/settings.js";

class Npc extends Sprite{
    constructor(x, y, width, height, imgPath, elementName, name, dialog = null){
        super(x, y, width, height, imgPath, elementName);
        this.NAME = name;
        this.IMG_NUM = 1;
        this.CHAT;
        this.REPLIC_NUM = 0;

        this.CHAT_LIST = document.getElementsByClassName("chat");
        this.DIALOG = dialog

    }
    dialog(key, hero, listNpc){
        let collRight = hero.collisionRight(listNpc);
        let collLeft = hero.collisionLeft(listNpc);
        if (key["KeyF"] == true){
            console.log(this.PARAGRAPH);
            try{
                this.PARAGRAPH.remove();
                this.CHAT.ELEMENT.remove();
            } 
            catch{
                "pass"
            }
            
            if (hero.SHOW_DIALOG == true){
                if (this.REPLIC_NUM < this.DIALOG.length - 1){
                    this.REPLIC_NUM++;
                }
                
                this.CHAT = new Sprite(0, 700, document.body.clientWidth, document.body.clientHeight - 700, "./images/chat.png");
                this.CHAT.ELEMENT.classList.add("chat");
                this.PARAGRAPH = document.createElement("p");
                this.PARAGRAPH.classList.add("chat-text");
                console.log("this.DIALOG", this.DIALOG[this.REPLIC_NUM])
                if (this.DIALOG[this.REPLIC_NUM] != undefined){
                    console.log(this.DIALOG[this.REPLIC_NUM])
                    let [whoTalks, text] = this.DIALOG[this.REPLIC_NUM].split(":");
                    // console.log(text);
                    this.PARAGRAPH.innerText = text;
                    if (whoTalks == "c"){
                        for(let elem of document.getElementsByClassName("profile")){
                            console.log(1);
                            elem.remove();
                        }
    
                        let profile = new Sprite(200, 720, 150, 150, "./images/chProfile.png");
                        profile.ELEMENT.classList.add("chat");
                        profile.ELEMENT.classList.add("profile");
    
                    } else if (whoTalks == "m"){
                        for(let elem of document.getElementsByClassName("profile")){
                            console.log(2);
                            elem.remove();
                        }
    
                        let profile = new Sprite(200, 720, 150, 150, "./images/MykolaProfile.png");
                        profile.ELEMENT.classList.add("chat");
                        profile.ELEMENT.classList.add("profile");
    
                    } else if (whoTalks == "v"){
                        for(let elem of document.getElementsByClassName("profile")){
                            console.log(3);
                            elem.remove();
                        }
                        
                        let profile = new Sprite(200, 720, 150, 150, "./images/vikProfile.png");
                        profile.ELEMENT.classList.add("chat");
                        profile.ELEMENT.classList.add("profile");
                    } 
                    
                    document.body.append(this.PARAGRAPH);
                }
            }
    
        }
    }
}

export default Npc;