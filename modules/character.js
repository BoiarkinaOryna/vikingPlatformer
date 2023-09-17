import MovingSprite from "/modules/movingSprite.js";
class Character extends MovingSprite{
    constructor(x, y, width, height, imgPath, elementName, health, dmg, name){
        super(x, y, width, height, imgPath, elementName, health, dmg);
        this.NAME = name;
        this.IMG_NUM = 1;
        this.ELEMENT.classList.add("right");
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
                this.STATUS = "running";
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
                this.STATUS = "running";
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
                this.jump(listElem);
            }

            if (this.GRAVITY == true){
                this.STATUS = "falling";
            } 

            
        }
    }
    
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