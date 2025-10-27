const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let moto = { x: 50, y: 350, width: 50, height: 30, speed: 5 };
let obstacles = [];
let score = 0;
let gameOver = false;

function spawnObstacle() {
  const height = Math.random() * 50 + 20;
  obstacles.push({ x: canvas.width, y: canvas.height - height, width: 20, height: height });
}
setInterval(spawnObstacle, 2000);

function drawMoto() {
  ctx.fillStyle = "red";
  ctx.fillRect(moto.x, moto.y, moto.width, moto.height);
}

function drawObstacles() {
  ctx.fillStyle = "black";
  obstacles.forEach(ob => ctx.fillRect(ob.x, ob.y, ob.width, ob.height));
}

function update() {
  if (gameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  obstacles.forEach(ob => ob.x -= 3);
  obstacles = obstacles.filter(ob => ob.x + ob.width > 0);

  drawMoto();
  drawObstacles();

  obstacles.forEach(ob => {
    if (moto.x < ob.x + ob.width && moto.x + moto.width > ob.x &&
        moto.y < ob.y + ob.height && moto.y + moto.height > ob.y) {
      gameOver = true;
      alert("Game Over! Score: " + score);
    }
  });

  score++;
  requestAnimationFrame(update);
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") moto.y -= moto.speed;
  if (e.key === "ArrowDown") moto.y += moto.speed;
  if (moto.y < 0) moto.y = 0;
  if (moto.y + moto.height > canvas.height) moto.y = canvas.height - moto.height;
});

update();

