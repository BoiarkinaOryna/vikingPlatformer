import Sprite from "/modules/settings.js";
class Character extends Sprite{
    constructor(x, y, width, height, imgPath, elementName, health, dmg, name){
        super(x, y, width, height, imgPath, elementName);
        this.NAME = name;
        this.HEALTH = health;
        this.DMG = dmg;
        this.IMG_NUM = 1;
    };

    animation(){
        if (this.IMG_NUM < 3){;
            this.IMG_NUM ++;
        } else{
            this.IMG_NUM = 2;
        }

        this.IMG_PATH = `../images/character${this.IMG_NUM}.png`;
        this.ELEMENT.src = this.IMG_PATH;

    }

    move(key, listElem){
        switch (key){
            case "KeyD":
                this.ELEMENT.classList.remove("left");
                this.ELEMENT.classList.add("right");
                this.animation();
                let collRight = this.collisionRight(listElem);
                console.log(collRight);
                if (collRight == false){
                    this.X += 5;
                    this.ELEMENT.style.left = `${this.X}px`;
                }
                break;

            case "KeyA":
                this.ELEMENT.classList.remove("right");
                this.ELEMENT.classList.add("left");
                this.animation();
                let collLeft = this.collisionLeft(listElem);
                if(collLeft == false){
                    this.X -= 5;
                    this.ELEMENT.style.left = `${this.X}px`;
                }
                break;
        }
    }
    collisionRight(listElem){
        let collide = false;
        for (let block of listElem){
            let blockRect = block.RECT;
            // console.log(this.RECT);
            let chRect = this.getRect()
            // console.log("block.RECT", block.RECT);
            if (chRect.bottom > block.RECT.top && chRect.top < block.RECT.bottom){
                // console.log(1);
                if (chRect.left <= block.RECT.left && chRect.right >= block.RECT.left){
                    // console.log(2);
                    collide = true;
                    break;
                }}};
        return collide;
    };
    
    collisionLeft(listElem){
        let collide = false;
        for (let block of listElem){
            let blockRect = block.RECT;
            let chRect = this.getRect()
            if (chRect.bottom > blockRect.top && chRect.top < blockRect.bottom){
                if (chRect.right >= blockRect.right && chRect.left <= blockRect.right){
                    collide = true;
                    break;
                }}};
        return collide;
    };
};


export default Character;