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
            if (entry.at(0) == "KeyD" && entry.at(1) == true && this.ATTACKING == false){
                this.RUNNING = true;
                this.IDLE = false;
                
                // console.log(true);
                this.ELEMENT.classList.remove("left");
                this.ELEMENT.classList.add("right");
                if (this.RUNNING == true){
                    this.animation();
                    
                }
                // console.log(this.Y)
                let collRight = this.collisionRight(listElem);
                // console.log(collRight);
                if (collRight == false){
                    this.X += 5;
                    this.ELEMENT.style.left = `${this.X}px`;
                    this.RUNNING = false;
                }
            }

            if (entry.at(0) == "KeyA" && entry.at(1) == true && this.ATTACKING == false){
                this.RUNNING = true;
                this.IDLE = false;

                this.ELEMENT.classList.remove("right");
                this.ELEMENT.classList.add("left");
                if (this.RUNNING == true){
                    this.animation();
                }
                
                let collLeft = this.collisionLeft(listElem);
                if(collLeft == false){
                    this.X -= 5;
                    this.ELEMENT.style.left = `${this.X}px`;
                    this.RUNNING = false;
                }
            }

            if (entry.at(0) == "KeyW" && entry.at(1) == true && this.JUMP == false && this.GRAVITY == false){
                this.JUMP = true;
                this.JUMPING = true;
                this.IDLE = false;
            }

            if (this.JUMP == true){
                this.jump(listElem);
                this.JUMPING = false;
                this.IDLE = true;
            }

            
        }
    }
    
    jump(listElem){
        if (this.GRAVITY == false){
            let collisionUp = this.collisionUp(listElem);
            // console.log(collisionUp);

            if (collisionUp == false){
                this.Y -= 3.952;
                this.ELEMENT.style.top = `${this.Y}px`;
                this.JUMP_DISTANCE -= 3.952;
                if (this.JUMP_DISTANCE <= 0){
                    this.JUMP = false;
                    this.GRAVITY = true;
                }
            } else{
                this.JUMP = false;
                this.GRAVITY = true;
            }
            // else{

            //     this.JUMP_DISTANCE = 200;
            //     // this.JUMPING = false;
            //     // this.IDLE = true;
            }
    };
    

    showDialog(listNpc){
        // нет
        if (this.collisionRight(listNpc) == true || this.collisionLeft(listNpc) == true){
            this.SHOW_DIALOG = true;
        } else{
            this.SHOW_DIALOG = false;
            try{
                document.querySelector(".chat-text").remove();
                let lengthArray = document.getElementsByClassName("chat").length
                for (let chat; chat < lengthArray; chat++){
                    document.querySelector(".chat").remove()
                }
                
                document.querySelector(".profile").remove()
            }
            catch{
                "pass";
            }

        }
    };
}

export default Character;

