var vpBuffer;
var mmBuffer;

var windowHeight;
var widnowWidth;

function setup() {
    // 800 x 400 (double width to make room for each "sub-canvas")
    createCanvas(windowWidth*.95, windowHeight*.95);
    // Create both of your off-screen graphics buffers
    vpBuffer = createGraphics(width/2, height);
    mmBuffer = createGraphics(width/2, height);
}

function draw() {
    
    // Draw on your buffers however you like
    drawVpBuffer();
    drawMmBuffer();
    // Paint the off-screen buffers onto the main canvas
    image(vpBuffer, 0, 0);
    image(mmBuffer, vpBuffer.width, 0);
}

function drawVpBuffer() {
    vpBuffer.background(0, 0, 0);
    vpBuffer.fill(255, 255, 255);
    vpBuffer.textSize(32);
    vpBuffer.text("This is the left buffer!", 50, 50);
}

function drawMmBuffer() {
    mmBuffer.background(255, 100, 255);
    mmBuffer.fill(0, 0, 0);
    mmBuffer.textSize(32);
    mmBuffer.text("This is the right buffer!", 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    vpBuffer.resizeCanvas(width/2, height);
    mmBuffer.resizeCanvas(width/2, height)
}