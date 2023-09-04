import MovingSprite from '/modules/movingSprite.js';

class Enemy extends MovingSprite{
    constructor(x, y, width, height, img, tag, health, dmg){
        super(x, y, width, height, img, tag, health, dmg);

        this.MOVING_RIGHT = false;
        this.MOVING_LEFT = true;
    
        
    }
    enemyMove(listElem){
        this.gravity(listElem);
        this.animation();
        let collisionRight = this.collisionRight(listElem);
        let collisionLeft = this.collisionLeft(listElem);
        if (this.MOVING_LEFT == true && collisionLeft == false){
            this.X -= 2;
            this.ELEMENT.style.left = `${this.X}px`;
        } else if (collisionLeft == true){
            this.MOVING_LEFT = false;
            this.MOVING_RIGHT = true;
            this.ELEMENT.classList.remove("right");
            this.ELEMENT.classList.add("left");
        }

        if (this.MOVING_RIGHT == true && collisionRight == false){
            this.X += 2;
            this.ELEMENT.style.left = `${this.X}px`;
        } else if (collisionRight == true){
            this.MOVING_RIGHT = false;
            this.MOVING_LEFT = true;
            this.ELEMENT.classList.remove("left");
            this.ELEMENT.classList.add("right");
        }
    }
    animation(){
        if (this.IMG_NUM < 4){;
            this.IMG_NUM ++;
        } else{
            this.IMG_NUM = 1;
        }
        this.IMG_PATH = `../images/ElfRun${this.IMG_NUM}.png`;
        this.ELEMENT.src = this.IMG_PATH;
        
    }
};

export default Enemy;