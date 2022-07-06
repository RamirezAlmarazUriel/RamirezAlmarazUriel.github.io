"use strict";
var canvas = document.getElementById("canvas1");
var  ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var  particlesArray = [];
var  numberOfParticles = 45;
    
//direccion particulas
var particle = /** @class */ (function () {
    function particle(x,y) {
        this.x = x;
        this.y = y;
        this.size =  10;
        this.weight = 2; 
        this.directionX = -4;
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
            }
       //empezar a dibujar 
       particle.prototype.draw = function () {
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2 );
            ctx.closePath();
            ctx.fill()        
          }
          return particle;
        }());
        function init(){
            for (let i = 0; i < numberOfParticles;i++){
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particlesArray.push(new particle(y, x));
            }
        }
        init ();
       
          function animate (){
              ctx.fillStyle ="rgba(255, 255, 0, 0.01)";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              for (let i = 0; i < particlesArray.length; i++){
                  particlesArray[i].update();
                particlesArray[i].draw();            }
              
               requestAnimationFrame(animate);
                }      
        //referencia de donde salen los disparos
         animate();
        

        
       