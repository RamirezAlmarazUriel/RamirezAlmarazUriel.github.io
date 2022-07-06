var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var numberOfParticles = 35;
var particlesArray = [];
//direccion particulas
var particle = /** @class */ (function () {
    function particle(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 2;
        this.directionX = -2;
    }
    particle.prototype.update = function () {
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.weight = 2;
            this.x = Math.random() * canvas.width;
        }
        this.weight += 0.05;
        this.y += this.weight;
        this.x += this.directionX;
    };
    particle.prototype.draw = function () {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    return particle;
}());
function init() {
    for (var i = 0; i < numberOfParticles; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        particlesArray.push(new particle(y, x));
    }
}
init();
function animate() {
    ctx.fillStyle = "rgba(255, 255, 0, 0.01)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();
