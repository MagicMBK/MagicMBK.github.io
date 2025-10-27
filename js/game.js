const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let moto = { x: 50, y: 350, w: 50, h: 30, speed: 6 };
let obstacles = [];
let score = 0;
let gameOver = false;

function spawnObstacle() {
  const h = Math.random()*60 + 20;
  obstacles.push({x: canvas.width, y: canvas.height - h, w: 20, h: h});
}
setInterval(spawnObstacle, 1500);

function drawMoto() {
  ctx.fillStyle = "#ff4d4d";
  ctx.fillRect(moto.x, moto.y, moto.w, moto.h);
}

function drawObstacles() {
  ctx.fillStyle = "#00ffff";
  obstacles.forEach(o => ctx.fillRect(o.x, o.y, o.w, o.h));
}

function update() {
  if(gameOver) return;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  obstacles.forEach(o => o.x -= 4);
  obstacles = obstacles.filter(o => o.x+o.w>0);

  drawMoto();
  drawObstacles();

  obstacles.forEach(o=>{
    if(moto.x<moto.x+o.w && moto.x+moto.w>o.x &&
       moto.y<moto.y+o.h && moto.y+moto.h>o.y){
      gameOver=true;
      alert("Game Over! Score: "+score);
    }
  });

  score++;
  requestAnimationFrame(update);
}

document.addEventListener("keydown", e=>{
  if(e.key==="ArrowUp") moto.y-=moto.speed;
  if(e.key==="ArrowDown") moto.y+=moto.speed;
  if(moto.y<0) moto.y=0;
  if(moto.y+moto.h>canvas.height) moto.y=canvas.height-moto.h;
});

update();
