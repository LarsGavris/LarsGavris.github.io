class Animator {
    constructor (spriteDir=".") {
        this.dir = spriteDir;
        this.sprites = {};
    }

    async loadImage (path) {
        let img = new Image();
        img.src = path;
        return new Promise((resolve, reject) => {
            img.onload = async () => resolve(img);
        });
    }

    /*  spritesData = {
            sprites: [
                {
                    spriteName: "name",
                    frameCount: 5,
                    size: undefined,
                    animationSpeed: 1
                }
            ]
        }
    */
    async loadMany (spritesData) {
        await Promise.all(spritesData.sprites.map(async sprite => {
            return this.load(sprite.spriteName, sprite.frameCount, sprite.size, sprite.animationSpeed);
        }));
    }

    async load (spriteName, frameCount, size=undefined, animationSpeed=1) {
        if (frameCount < 0) throw Error("Error: frameCount must be 1 or greater");

        let image = await this.loadImage(this.dir + "/" + spriteName + ".png");
        let sw = Math.floor(image.width / frameCount);
        let sh = image.height;
        let dw, dh;
        if (size == undefined) {
            dw = sw; dh = sh;
        } else {
            dw = size[0];
            dh = size[1];
        }
        

        this.sprites[spriteName] = {
            image: image,
            frameCount: frameCount,
            sw: sw,
            sh: sh,
            dw: dw,
            dh: dh,
            currentFrame: 0,
            animationSpeed: animationSpeed
        }
        return;
    }

    draw (spriteName, ctx, pos, frame) {
        let sprite = this.sprites[spriteName];
        ctx.drawImage(sprite.image, 
            sprite.currentFrame * sprite.sw, 0, sprite.sw, sprite.sh, 
            pos.x, pos.y, sprite.dw, sprite.dh);
        
            sprite.currentFrame = Math.floor(sprite.animationSpeed * frame % sprite.frameCount);
        return;
    }
}