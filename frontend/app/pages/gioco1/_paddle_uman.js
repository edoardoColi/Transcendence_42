export class Paddle {
    constructor(x, y, width, height, upKey, downKey) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.upKey = upKey;
      this.downKey = downKey;
      this.speed = 5;
      this.dy = 0;

      document.addEventListener('keydown', (e) => {
        if (e.key === this.upKey) this.dy = -this.speed;
        if (e.key === this.downKey) this.dy = this.speed;
      });

      document.addEventListener('keyup', (e) => {
        if (e.key === this.upKey || e.key === this.downKey) this.dy = 0;
      });
    }

    draw(ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(canvas) {
      this.y += this.dy;
      if (this.y < 0) this.y = 0;
      if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;
    }
}