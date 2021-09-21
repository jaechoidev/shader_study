import {BounceString} from './bouncestrings.js';

class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1; //check device pixel ratio, something like Retina.

        // parameters
        this.strings = [];
        this.moveX = -5000;
        this.moveY = -5000;
        this.isDown = false;

        this.xGap = 20;
        this.yGap = 20;
        this.x1 = this.xGap;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // moving events
        document.addEventListener('pointerdown',this.onDown.bind(this), false);
        document.addEventListener('pointermove',this.onMove.bind(this), false);
        document.addEventListener('pointerup',this.onUp.bind(this), false);

        window.requestAnimationFrame(this.animate.bind(this));
    }
    
    string(i){
        return {
            x1: this.x1, 
            y1: i * this.yGap + this.yGap, 
            x2: this.stageWidth - this.xGap,
            y2: i * this.yGap + this.yGap, 
            }
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.strings = [];

        const total = Math.floor((this.stageHeight - this.yGap) / this.yGap);

        for (let i = 0; i < total; i++){
            this.strings[i] = new BounceString(this.string(i), '#ff5038');
        }
    }
    animate(){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        // something here for drawing?
        if (this.strings.length > 0){
            for (let i = 0; i < this.strings.length; i++){
                this.strings[i].animate(this.ctx, this.moveX, this.moveY);
            }
        }
    }

    //
    onDown(e){
        this.isDown = true;
        this.moveX = e.clientX;
        this.moveY = e.clientY;
    }

    onMove(e){
        if (this.isDown){
            this.moveX = e.clientX;
            this.moveY = e.clientY;
        }

    }

    onUp(e){
        this.isDown = false;

        this.moveX = -5000;
        this.moveY = -5000;
    }
}

window.onload = () => {
    new App();
};