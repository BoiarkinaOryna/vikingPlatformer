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
        this.STRIKE_NUM = 3;
        this.IDLE = true;
        this.RUNNING = false;
        this.JUMPING = false;
        this.ATTACKING = false;
        // this.FALL_COUNT = 0;
        // this.FALL_SPEED = 50;
        // this.STATUS = "idle";

    }
    collisionRight(listElem){
        let collide = false;
        for (let block of listElem){
            let blockRect = block.RECT;
            // console.log("block.Y = ", block.Y);
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
            this.Y += 3.952;
            this.ELEMENT.style.top = `${this.Y}px`;
            this.GRAVITY = true;
            this.JUMP_DISTANCE = 197.6;
            this.JUMP = false;
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
    death(){
        if (this.HEALTH <= 0){
            this.ELEMENT.remove();
        };
        // if ()
    };
    heroesStrike(listEnemies){
        if (this.IDLE == true && this.JUMPING == false){
            this.ATTACKING = true;
            this.IDLE = false;
            this.WIDTH = 150;
            this.ELEMENT.style.width = `${this.WIDTH}px`;

            
            this.IMG_PATH = `../images/characterStrike${this.STRIKE_NUM}.png`;
            this.ELEMENT.src = this.IMG_PATH;

            // if (this.STRIKE_NUM > 2){
            //     this.STRIKE_NUM = 1;
            //     this.STATUS = "idle";
            //     return;

            // }
            // for (let num; num < 3; num++){
            //     this.STRIKE_NUM = num;
            // this.ELEMENT.src = `../images/characterStrike${this.STRIKE_NUM}.png`;
            // }
            if (this.ELEMENT.classList.contains("right") == true){
                this.HIT = new Hit(this.X + 75, this.Y, 75, this.HEIGHT, undefined, "div");
                // this.HIT.ELEMENT.style.backgroundColor = "red";
                this.HIT.ELEMENT.classList.add("hit");

            }else if (this.ELEMENT.classList.contains("left") == true){
                this.X -= 75;
                this.HIT = new Hit(this.X, this.Y, 75, this.HEIGHT, undefined, "div");
                this.ELEMENT.style.left = this.X;
                // this.HIT.ELEMENT.style.backgroundColor = "red";
                this.HIT.ELEMENT.classList.add("hit");
            };
            let [collisionRight, enemyRight] = this.HIT.collisionRight(listEnemies);
            let [collisionLeft, enemyLeft] = this.HIT.collisionLeft(listEnemies);
            let [collisionUp, enemyUp] = this.HIT.collisionUp(listEnemies);
            let [collisionDown, enemyDown] = this.HIT.collisionDown(listEnemies);

            // console.log(this.HIT)

            if (collisionRight == true){
                enemyRight.HEALTH -= this.DMG;
                enemyRight.death();
            } else if (collisionLeft == true){
                // console.log(enemyLeft);
                enemyLeft.HEALTH -= this.DMG;
                enemyLeft.death();
            } else if (collisionUp == true){
                enemyUp.HEALTH -= this.DMG;
                enemyUp.death();
            } else if (collisionDown == true){
                enemyDown.HEALTH -= this.DMG;
                enemyDown.death();
            };

            

            setTimeout(() => {
                document.querySelector(".hit").remove(),         
                this.WIDTH = 70;
                if (this.ELEMENT.classList.contains("left") == true){
                    this.X += 75;
                    this.ELEMENT.style.left = this.X;
                    
                };
    
                this.IMG_PATH = `../images/character1.png`
                this.ELEMENT.style.width = `${this.WIDTH}px`;
                this.ELEMENT.src = this.IMG_PATH;
                this.IDLE = true;
                this.ATTACKING = false;
            }, 100);
        }
    }
    enemiesStrikeDetection(hero){
        let col = false;
        let chRect = this.getRect();
        let hRect = hero.getRect()
        console.log("enemy", chRect);
        console.log("character", hRect);
        if (chRect.bottom > hRect.top && chRect.top < hRect.bottom){
            console.log(1);
            if (chRect.left <= hRect.left && chRect.right >= hRect.left){
                console.log(2);
                col = true;
            }
        }else if (chRect.bottom > hRect.top && chRect.top < hRect.bottom){
            console.log(1);
            if (chRect.right >= hRect.right && chRect.left <= hRect.right){
                console.log(2)
                col = true;
            }
        }else if (chRect.right > hRect.left && chRect.left < hRect.right){
            console.log(1);
            if (chRect.bottom >= hRect.top && chRect.top < hRect.top){
                console.log(2)
                col = true;
            }
        }else if (chRect.right > hRect.left && chRect.left < hRect.right){
            console.log(1);
            if (chRect.top <= hRect.bottom && chRect.bottom > hRect.bottom){
                console.log(2)
                col = true;
            }
        }
        if (col == true){
                hero.HEALTH -= this.DMG;
                hero.death();
        }
    }
    enemiesStrike(){
        if (this.IDLE == true && this.JUMPING == false){
            this.ATTACKING = true;
            this.IDLE = false;
            this.WIDTH = 120;
            this.ELEMENT.style.width = `${this.WIDTH}px`;

            this.IMG_PATH = `../images/ElfStrike.png`;
            this.ELEMENT.src = this.IMG_PATH;

            if (this.ELEMENT.classList.contains("right") == true){
                this.HIT = new Hit(this.X + 65, this.Y, 65, this.HEIGHT, undefined, "div");
                console.log("img is changing");
                // this.HIT.ELEMENT.style.backgroundColor = "red";
                this.HIT.ELEMENT.classList.add("hit");

            }else if (this.ELEMENT.classList.contains("left") == true){
                this.X -= 65;
                this.HIT = new Hit(this.X, this.Y, 65, this.HEIGHT, undefined, "div");
                console.log("img is changing");
                this.ELEMENT.style.left = this.X;
                // this.HIT.ELEMENT.style.backgroundColor = "red";
                this.HIT.ELEMENT.classList.add("hit");
            };
            
            setTimeout(() => {
                document.querySelector(".hit").remove(),         
                this.WIDTH = 60;
                if (this.ELEMENT.classList.contains("left") == true){
                    this.X += 65;
                    this.ELEMENT.style.left = this.X;
                    
                };
    
                this.IMG_PATH = `../images/ElfRun2.png`
                this.ELEMENT.style.width = `${this.WIDTH}px`;
                this.ELEMENT.src = this.IMG_PATH;
                this.IDLE = true;
                this.ATTACKING = false;
            }, 100);
        }
    }
};

export default MovingSprite;