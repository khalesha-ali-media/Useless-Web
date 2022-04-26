var canvas = document.querySelector('canvas');
console.log(canvas);

var canvas = document.getElementById('canvas');
var button = document.getElementById('colorChange');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

let fileInput = document.getElementById('water');
fileInput.addEventListener('change', function(ev) {
   if(ev.target.files) {
      let file = ev.target.files[0];
     
      var reader  = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
          
        var image = new Image();
          image.src = e.target.result;
          image.onload = function(ev) {
             var canvas = document.getElementById('canvas');
             canvas.width = image.width;
             canvas.height = image.height;
             var ctx = canvas.getContext('2d');
             ctx.drawImage(image,0,0);
         }
      }
   }
});


var noOfDrops = 14;
var drop= [];
for(var i=0; i<noOfDrops; i++){
var x = Math.floor(Math.random()*canvas.width);
var y = Math.floor(Math.random()*canvas.height);
    drop[i] = new Rain(x,y);
}


function Rain(x,y){
    this.x = x;
    this.y = y;

    this.fall = function(){
    var dir = Math.floor(Math.random())*3;
    if (dir ==0){
        this.x = this.x -1;
    }
    if (dir ==0){
        this.x = this.x +1;
    }
        this.y = this.y+1;
    if(this.y > canvas.height){
        this.y = 0;
    }
    }

    this.show = function(){
        context.drawImage(water,this.x, this.y, 40,60)

    }
}



function draw(){
    
    context.fillRect(0,0,canvas.width,canvas.height);
    for(var i=0; i<noOfDrops; i++)
    {
        drop[i].show();
        drop[i].fall();

    }

}

function update(){
    draw();
    window.requestAnimationFrame(update);
}

update();


const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(18);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerhtml = "#" + randomColor;
  }
  
  colorChange.addEventListener("click", setBg);
  setBg();