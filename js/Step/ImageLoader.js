/**
 * Simple image loader that determines when all images have been loaded
 */

export let ImageLoader = function() {

    let loading = 0;
    let func = null;

    this.load = function(src) {
        let img = new Image();

        img.onload = () => {
            loadedOne();
        }

        img.onerror = () => {
            loadedOne();
        }

        img.onabort = () => {
            loadedOne();
        }

        loading++;
        img.src = src;
        return img;
    }

    function loadedOne() {
        loading--;

        if(loading === 0 && func !== null) {
            func();
        }
    }

    this.loaded = function(_func) {
        if(loading === 0) {
            _func();
        }

        func = _func;
    }
}
