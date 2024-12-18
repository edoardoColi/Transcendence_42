export class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = 4;
    this.dy = 4;
    this.pp1 = 0;
    this.pp2 = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

  update(canvas, leftPaddle, rightPaddle) {
    this.x += this.dx;
    this.y += this.dy;
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.dy *= -1;
    }

    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.dx *= -1;
    }
  }

  checkCollision(leftPaddle, rightPaddle) {
    if (this.x - this.radius < leftPaddle.x + leftPaddle.width &&
        this.y > leftPaddle.y &&
        this.y < leftPaddle.y + leftPaddle.height)
      this.dx *= -1;

    if (this.x + this.radius > rightPaddle.x &&
        this.y > rightPaddle.y &&
        this.y < rightPaddle.y + rightPaddle.height)
      this.dx *= -1;
  }
}
