function preloadSprites () {
    let rootDirectory = "./res/sprites";
    let sprites = {};

    Array.from(arguments).forEach(fileName => {
        sprites[fileName] = new Image();
        sprites[fileName].src = rootDirectory + "/" + fileName;
    });

    return sprites;
};