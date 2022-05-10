
export function createDrop() {
    let drop = document.createElement("div");
    drop.className = "raindrop raindrop-color";
    let offset = Math.random();
    // console.log("generated ", offset);
    drop.style.setProperty('left', `${offset*100}%`);
    drop.addEventListener("animationend", (e) => {
        e.target.remove();
    });
    return drop;
}

export function createTail() {
    let tail = document.createElement("div");
    tail.className = "drop-tail raindrop-color";
    let height = Math.random();
    tail.style.setProperty('height', `10px`);
    return tail;
}
export function createRaindrop(){
    let drop = createDrop();
    let tail = createTail();
    drop.appendChild(tail);
    document.querySelector('body').appendChild(drop);
}
// createRaindrop();
