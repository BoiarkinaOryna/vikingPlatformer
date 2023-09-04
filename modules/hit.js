import Sprite from "/modules/settings.js";

class Hit extends Sprite{
    constructor(x, y, width, height, img, tag){
        super(x, y, width, height, img, tag);
        
    }
    collisionRight(listElem){
        let collideblock;
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
                    collideblock = block;
                    break;
                }}};
        return [collide, collideblock];
    };
    
    collisionLeft(listElem){
        let collide = false;
        let collideblock;
        for (let block of listElem){
            let blockRect = block.RECT;
            let chRect = this.getRect()
            if (chRect.bottom > blockRect.top && chRect.top < blockRect.bottom){
                if (chRect.right >= blockRect.right && chRect.left <= blockRect.right){
                    collide = true;
                    collideblock = block;
                    break;
                }}};
        return [collide, collideblock];
    };

    collisionDown(listElem){
        let collideblock;
        let collide = false;
        for (let block of listElem){
            let blockRect = block.RECT;
            let chRect = this.getRect()
            if (chRect.right > blockRect.left && chRect.left < blockRect.right){
                if (chRect.bottom >= blockRect.top && chRect.top < blockRect.top){
                    collide = true;
                    collideblock = block;
                    break;
                }}};
        return [collide, collideblock];
    };

    collisionUp(listElem){
        let collideblock;
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
                    collideblock = block;
                    break;
                }}};
        return [collide, collideblock];
    };
}

export default Hit;