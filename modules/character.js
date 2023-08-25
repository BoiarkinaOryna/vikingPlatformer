import Sprite from "/modules/settings.js";
class Character extends Sprite{
    constructor(width, height, x, y, imgPath, elementName, health, dmg, name){
        super(width, height, x, y, imgPath, elementName);
        this.NAME = name;
        this.HEALTH = health;
        this.DMG = dmg;
    };

    move(key){
        switch (key){
            case "KeyD":
                this.X += 3;
                this.ELEMENT.style.left = `${this.X}px`;
                break;

            case "KeyA":
                this.X -= 3;
                this.ELEMENT.style.left = `${this.X}px`;
                break;
        }
    }
};

export default Character;