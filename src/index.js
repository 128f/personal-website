import { createRaindrop } from './rain';
import { spawnCanvas, newRenderConfig, randomInstructions } from './lsystems';
import { TraceRenderer } from 'l-systems';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('react-root');
ReactDOM.render(<App />, root);

document.addEventListener("DOMContentLoaded", function(){
    render();
});
const render = () => {
    return window.setInterval(() => {
        let c = spawnCanvas();
        let renderConfig = newRenderConfig(c.canv, c.ctx, randomInstructions());
        document.querySelector('#canvasContainer').appendChild(c.canv);
        let renderer = new TraceRenderer(renderConfig);
        let interval = window.setInterval(() => {
            c.ctx.clearRect(0, 0, c.canv.width, c.canv.height)
            renderer.renderOnce();
        }, 3)
        renderer.onComplete = (() => {
            clearInterval(interval);
            c.canv.remove();
        });
    }, 2000)
}
window.setInterval(createRaindrop, 20);
