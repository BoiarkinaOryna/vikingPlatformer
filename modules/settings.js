class Sprite{
    constructor(x, y, width, height, img = undefined, tag = "img"){
        this.X = x;
        this.Y = y;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.IMG_PATH = img
        this.ELEMENT = document.createElement(tag);
        this.JUMP = false;
        this.JUMP_DISTANCE = 200;
        this.GRAVITY = false;
        
        
        document.body.append(this.ELEMENT);

        if (tag = "img" && img != undefined){
            this.ELEMENT.src = this.IMG_PATH
        };

        this.ELEMENT.style.position = "absolute";
        this.ELEMENT.style.left = `${this.X}px`;
        this.ELEMENT.style.top = `${this.Y}px`;
        this.ELEMENT.style.width = `${this.WIDTH}px`;
        this.ELEMENT.style.height = `${this.HEIGHT}px`;

        this.RECT = this.getRect();
    }

    getRect(){
        let rect = this.ELEMENT.getBoundingClientRect();
        // console.log(rect);
        if (this.HEIGHT == 90){
            // console.log("Character's rect", rect)
        }
        return {
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
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
}

export default Sprite;