const canvas = document.getElementById("vodeni-efekat");
const context = canvas.getContext("2d");
const image = document.getElementById("originalna-slika");

let drops = [];

class Drop {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height + this.size) {
      this.y = -this.size;
    }
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 255, 255, 0.5)";
    context.fill();
  }
}

function createDrops() {
  for (let i = 0; i < canvas.width / 4; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 2 + 1;
    let speed = Math.random() * 2 + 1;
    drops.push(new Drop(x, y, size, speed));
  }
}

function updateDrops() {
  drops.forEach(drop => {
    drop.update();
  });
}

function drawDrops() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drops.forEach(drop => {
    drop.draw();
  });
}

function animate() {
  requestAnimationFrame(animate);
  updateDrops();
  drawDrops();
}

function resizeCanvas() {
  canvas.width = image.clientWidth;
  canvas.height = image.clientHeight;
  drops = [];
  createDrops();
}

image.onload = () => {
  resizeCanvas();
  animate();
}

window.addEventListener('resize', resizeCanvas);
