import MovingSprite from '/modules/movingSprite.js';

class Enemy extends MovingSprite{
    constructor(x, y, width, height, img, tag, health, dmg){
        super(x, y, width, height, img, tag, health, dmg);

        this.MOVING_RIGHT = false;
        this.MOVING_LEFT = true;
    
        
    }
    enemyMove(listElem, hero){
        this.gravity(listElem);
        this.animation();
        let collisionRight = this.collisionRight(listElem);
        let collisionLeft = this.collisionLeft(listElem);
        if (this.MOVING_LEFT == true && collisionLeft == false){
            this.X -= 2;
            this.ELEMENT.style.left = `${this.X}px`;
            this.RECT = this.getRect();

        } else if (collisionLeft == true){
            this.MOVING_LEFT = false;
            this.MOVING_RIGHT = true;
            this.ELEMENT.classList.remove("right");
            this.ELEMENT.classList.add("left");
        }

        if (this.MOVING_RIGHT == true && collisionRight == false){
            this.X += 2;
            this.ELEMENT.style.left = `${this.X}px`;
            this.RECT = this.getRect();
            
        } else if (collisionRight == true){
            this.MOVING_RIGHT = false;
            this.MOVING_LEFT = true;
            this.ELEMENT.classList.remove("left");
            this.ELEMENT.classList.add("right");
        }
        this.agro(hero)
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
    agro(hero){
    //     console.log("self", self.X);
    //     console.log("hero", hero.X);
        // if (hero.Y > this.Y && hero.Y + 100 < this.Y){
        if (hero.Y + 40 <= this.Y && hero.Y + 240 >= this.Y){
            if (this.X < hero.X + 400 && this.X > hero.X){
                this.MOVING_RIGHT = false;
                this.MOVING_LEFT = true;
                this.ELEMENT.classList.remove("left");
                this.ELEMENT.classList.add("right");
                console.log("rightAgro");
                this.enemiesStrikeDetection(hero);
            }
            if (this.X > hero.X - 400 && this.X < hero.X){
                this.MOVING_LEFT = false;
                this.MOVING_RIGHT = true;
                this.ELEMENT.classList.remove("right");
                this.ELEMENT.classList.add("left");
                console.log("leftAgro");
                this.enemiesStrikeDetection(hero);
            }
        }
    }
};

export default Enemy;