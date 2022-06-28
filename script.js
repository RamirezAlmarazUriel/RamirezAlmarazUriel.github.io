const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = []; 
const numberOfParticles = 35;

//poner rango al titulo
let titleElement = document.getElementById("title1");
let titleMeasuarements = titleElement.getBoundingClientRect();
let title = { 
    x: titleMeasuarements.left,
    y: titleMeasuarements.top,
    width: titleMeasuarements.width,
    height: 22,
}
//direccion particulas
class particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size =  Math.random() * 5 + 1;
        this.weight = Math.random() * 1+ 1; 
        this.directionX = -1;
        }
            update(){
            if(this.y > canvas.height){
             this.y = 0 - this.size;
             this.weight = Math.random() * 1 + 0.01;
             this.x = Math.random() * canvas.width * 1.3;
            }
                this.weight += 0.015;
                this.y += this.weight;
                this.x += this.directionX; 

            if(
                this.x < title.x + title.width &&
                this.x + this.size > title.x &&
                this.y < title.y + title.height &&
                this.y + this.size > title.y
            ){
                this.y -= 3; 
                this.weight *= -0.3;  
            }    
        }
       //empezar a dibujar 
        draw(){
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2 );
            ctx.closePath();
            ctx.fill()        
          }
        }
       
        function init(){
            particlesArray = [];
            for(let i = 0; i < numberOfParticles; i++){
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
               particlesArray.push(new particle(x, y));
            }
         }
        //metodo usado para inicializar 
        //color y forma
        init (); 
        function animate (){
                ctx.fillStyle = "rgba (200, 200, 200, 0.01)";
                ctx.fillRect = (0, 0, canvas.width, canvas.height);
                for (let i = 0; i < particlesArray.length; i++){
                    particlesArray[i].update(); 
                    particlesArray[i].draw (); 
                }
                
                requestAnimationFrame(animate);
            }  
        //referencia de donde salen los disparos
         animate();
           window.addEventListener("resize", function(){
           canvas.width = this.window.innerWidth;
           canvas.height = this.window.innerHeight;
           titleMeasuarements = titleElement.getBoundingClientRect();
           title = {
            x: titleMeasuarements.left,
            y: titleMeasuarements.top,
            width: titleMeasuarements.width,
            height: 5,
           }
           init();


       });