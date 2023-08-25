class Sprite{
    constructor(x, y, width, height, img = undefined, tag = "img"){
        this.X = x;
        this.Y = y;
        this.WIDTH = width;
        this.HEIGHT = height;
        this.IMG_PATH = img
        this.ELEMENT = document.createElement(tag);
        this.RECT = this.getRect()
        
        document.body.append(this.ELEMENT);

        if (tag = "img" && img != undefined){
            this.ELEMENT.src = this.IMG_PATH
        };

        this.ELEMENT.style.position = "absolute";
        this.ELEMENT.style.left = `${this.X}px`;
        this.ELEMENT.style.top = `${this.Y}px`;
        this.ELEMENT.style.width = `${this.WIDTH}px`;
        this.ELEMENT.style.height = `${this.HEIGHT}px`;
    }

    getRect(){
        let rect = this.ELEMENT.getBoundingClientRect();
        return {
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
        }
    }
}

export default Sprite;