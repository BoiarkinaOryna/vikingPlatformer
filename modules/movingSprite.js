import Sprite from "/modules/settings.js";
import Hit from "/modules/hit.js";

class MovingSprite extends Sprite{
    constructor(x, y, width, height, img, tag, health, dmg){
        super(x, y, width, height, img, tag);
        this.JUMP = false;
        this.JUMP_DISTANCE = 200;
        this.GRAVITY = false;
        this.HEALTH = health;
        this.DMG = dmg;
        this.HIT;
        this.STRIKE_NUM = 0;
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
                    // collideblock = block;
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

    strike(listEnemies){
        // setTimeout(() => {this.ELEMENT.style.width = "200px";

            // while (this.STRIKE_NUM < 3){
            //     setTimeout(() => {
            //         this.STRIKE_NUM++;
            //         console.log(this.STRIKE_NUM);
            //         this.IMG_PATH = `../images/characterStrike${this.STRIKE_NUM}.png`;
            //         // this.WEAPON = "../images/sword.png";
            //         this.ELEMENT.src = this.IMG_PATH;
            //     }, 100)

            // }

            if (this.ELEMENT.classList.contains("right") == true){
                this.HIT = new Hit(this.X + this.WIDTH, this.Y, this.WIDTH, this.HEIGHT, "../images/hitBox.png", "img");
                this.HIT.ELEMENT.classList.add("hit");
                
            }
            else if (this.ELEMENT.classList.contains("left") == true){
                this.HIT = new Hit(this.X - this.WIDTH, this.Y, this.WIDTH, this.HEIGHT, "../images/hitBox.png", "img");
                this.HIT.ELEMENT.classList.add("hit");
            };

            let [collisionRight, enemyRight] = this.HIT.collisionRight(listEnemies);
            let [collisionLeft, enemyLeft] = this.HIT.collisionLeft(listEnemies);
            let [collisionUp, enemyUp] = this.HIT.collisionUp(listEnemies);
            let [collisionDown, enemyDown] = this.HIT.collisionDown(listEnemies);
            
            if (collisionRight == true){
                enemyRight.HEALTH -= this.DMG;
                console.log(enemyRight);
            };

            if (collisionLeft == true){
                console.log(enemyLeft);
                enemyLeft.HEALTH -= this.DMG;
                // console.log(enemyLeft.HEALTH);
            };

            if (collisionUp == true){
                enemyUp.HEALTH -= this.DMG;
            };

            if (collisionDown == true){
                enemyDown.HEALTH -= this.DMG;
            };


            
            setTimeout( () => {document.querySelector(".hit").remove()}, 300);
            this.ELEMENT.style.width = `${this.WIDTH}px`;
    }
};

export default MovingSprite;