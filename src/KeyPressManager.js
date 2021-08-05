class KeyPressManager {
    constructor () {
        this.keys = {};

        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
        });
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
}