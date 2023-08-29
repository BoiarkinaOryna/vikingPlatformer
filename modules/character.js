import Sprite from "/modules/settings.js";
class Character extends Sprite{
    constructor(x, y, width, height, imgPath, elementName, health, dmg, name){
        super(x, y, width, height, imgPath, elementName);
        this.NAME = name;
        this.HEALTH = health;
        this.DMG = dmg;
        this.IMG_NUM = 1;
        this.JUMP = false;
        this.JUMP_DISTANCE = 200;
        this.GRAVITY = false;
    };

    animation(){
        if (this.IMG_NUM < 7){;
            this.IMG_NUM ++;
        } else{
            this.IMG_NUM = 2;
        }this.IMG_PATH = `../images/character${this.IMG_NUM}.png`;
        this.ELEMENT.src = this.IMG_PATH;
        
    }

    move(listElem, keyPressed){
        let entriesArray = Object.entries(keyPressed);
        this.gravity(listElem)
        // console.log(this.JUMP_DISTANCE);
        for (let entry of entriesArray){
            // console.log(entry);
            if (entry.at(0) == "KeyD" && entry.at(1) == true){
                // console.log(true);
                this.ELEMENT.classList.remove("left");
                this.ELEMENT.classList.add("right");
                this.animation();
                let collRight = this.collisionRight(listElem);
                // console.log(collRight);
                if (collRight == false){
                    this.X += 5;
                    this.ELEMENT.style.left = `${this.X}px`;
                }
            }

            if (entry.at(0) == "KeyA" && entry.at(1) == true){
                this.ELEMENT.classList.remove("right");
                this.ELEMENT.classList.add("left");
                this.animation();
                let collLeft = this.collisionLeft(listElem);
                if(collLeft == false){
                    this.X -= 5;
                    this.ELEMENT.style.left = `${this.X}px`;
                }
            }

            if (entry.at(0) == "KeyW" && entry.at(1) == true && this.JUMP == false && this.GRAVITY == false){
                this.JUMP = true;
            }

            if (this.JUMP == true){
                this.jump(listElem)
            }

            
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

    gravity(listElem){
        let collDown = this.collisionDown(listElem)
        if (collDown == false && this.JUMP == false){
            this.Y += 5;
            this.ELEMENT.style.top = `${this.Y}px`;
            this.GRAVITY = true;
            this.JUMP_DISTANCE = 200;
        } else{
            this.GRAVITY = false;
        }
    };

    collisionDown(listElem){
        let collide = false;
        for (let block of listElem){
            let blockRect = block.RECT;
            let chRect = this.getRect()
            if (chRect.right > blockRect.left && chRect.left < blockRect.right){
                if (chRect.bottom >= blockRect.top && chRect.top < blockRect.top){
                    collide = true;
                    break;
                }}};
        return collide;
    };

    collisionUp(listElem){
        let collide = false;
        for (let block of listElem){
            let blockRect = block.RECT;
            let chRect = this.getRect()
            // console.log(1)
            if (chRect.right > blockRect.left && chRect.left < blockRect.right){
                // console.log(2)
                if (chRect.top <= blockRect.bottom && chRect.bottom > blockRect.bottom){
                    // console.log(3)
                    collide = true;
                    break;
                }}};
        return collide;
    };
    jump(listElem){
        if (this.GRAVITY == false){
            let collisionUp = this.collisionUp(listElem);
            // console.log(collisionUp);

            if(collisionUp == false && this.JUMP_DISTANCE > 0){
                this.Y -= 4;
                this.ELEMENT.style.top = `${this.Y}px`;
                this.JUMP_DISTANCE -= 4;
            }
            else{
                this.JUMP = false;
                this.GRAVITY = true;
                this.JUMP_DISTANCE = 200;
            }}};
    
    };


export default Character;