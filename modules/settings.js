class Sprite{
    constructor(x, y, width, height, img = undefined, tag = "img"){
        this.X = x;
        this.Y = y;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.IMG_PATH = img
        this.ELEMENT = document.createElement(tag);
        
        
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
        if (this.HEIGHT == 90){
            console.log("Character's rect", rect)
        }
        return {
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
        }
    }
}

export default Sprite;