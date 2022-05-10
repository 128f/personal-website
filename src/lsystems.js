import { Generator } from 'l-systems';

export function spawnCanvas() {
    let canv = document.createElement("canvas");
    let ctx  = canv.getContext('2d');
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    return { canv,ctx }
}


export function newRenderConfig(canv, ctx, instructions) {
    return {
        locX: Math.random()*canv.width,
        locY: Math.random()*canv.height,
        canvasContext: ctx,
        stepLength: Math.random()*10 + 10,
        renderWindow: 30,
        orientation: parseInt(Math.random()*4),
        instructions: instructions,
        color: randomColor(),
    };
};

export function randomInstructions(){
    let system = (new Generator).randomSystem();
    system.stepn(3);
    return system.instructions;
}

export function randomColor() {
    return `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, .7)`;
}


