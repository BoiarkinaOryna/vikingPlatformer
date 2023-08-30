import Sprite from '/modules/settings.js';

class Enemy extends Sprite{
    constructor(x, y, width, height, img, tag, health = 10, dmg = 2){
        super(x, y, width, height, img, tag);
        
    }
    enemyMove(listElem){
        this.gravity(listElem)
    }
}

export default Enemy;