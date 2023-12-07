
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Define a rectangle class
class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width  = width;
        this.height = height;
        this.color  = color;
    }

    // Draw the rectangle
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let rectangles = [];

for (let i = 0; i < 100; i++) {
    rectangles.push(new Rectangle(Math.random() * canvas.width, Math.random() * canvas.height, 100, 100, 'red'));
}

function update(deltaTime) {
    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].x += 100 * deltaTime;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].draw(ctx);
    }
}

let lastFrameTime = performance.now();

function gameLoop() {
    const now = performance.now();
    const deltaTime = (now - lastFrameTime) / 1000;
    lastFrameTime = now;

    update(deltaTime);
    draw();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);