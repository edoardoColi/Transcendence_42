export class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = 4;
    this.dy = 4;
    this.pp1 = 0;
    this.pp2 = 0;
    this.pp3 = 0;
    this.pp4 = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

  update(canvas, leftPaddle, rightPaddle) {
    if(sessionStorage.getItem('caosg1')=='true'){
      if(Math.floor(Math.random() * 11)==1){
        if(Math.floor(Math.random() * 3)==1){
          this.y -= Math.floor(Math.random() * 6);
          this.x -= Math.floor(Math.random() * 6);
        }else{
          this.y += Math.floor(Math.random() * 6);
          this.x += Math.floor(Math.random() * 6);
        }
      }
    }
    this.x += this.dx;
    this.y += this.dy;
    if(sessionStorage.getItem("nplayerg1")==2){
      if (this.y - this.radius < 0 || this.y + this.radius > canvas.height)
        this.dy *= -1;
    }else if(sessionStorage.getItem("nplayerg1")==3){
      if (this.y + this.radius > canvas.height)
        this.dy *= -1;
      if (this.y - this.radius < 4) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.dx *= -1;
        this.pp3++;
      }
    }else if(sessionStorage.getItem("nplayerg1")==4){
      if (this.y + this.radius > canvas.height-4) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.dx *= -1;
        this.pp4++;
      }
      if (this.y - this.radius < 4){
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.dx *= -1;
        this.pp3++;
      }
    }

    if (this.x - this.radius < 4) {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.dx *= -1;
      this.pp2++;
    }
    if (this.x + this.radius > canvas.width-4) {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.dx *= -1;
      this.pp1++;
    }
    if(sessionStorage.getItem("nplayerg1")==2)
      document.getElementById('testo').innerHTML=sessionStorage.getItem('p1')+" "+this.pp1+" - "+this.pp2+" "+sessionStorage.getItem('p2');
    else if(sessionStorage.getItem("nplayerg1")==3)
      document.getElementById('testo').innerHTML=sessionStorage.getItem('p1')+" "+this.pp1+" - "+this.pp2+" "+sessionStorage.getItem('p2')+" - "+sessionStorage.getItem('p3')+" "+this.pp3+" - ";
    else if(sessionStorage.getItem("nplayerg1")==4)
      document.getElementById('testo').innerHTML=sessionStorage.getItem('p1')+" "+this.pp1+" - "+this.pp2+" "+sessionStorage.getItem('p2')+" - "+sessionStorage.getItem('p3')+" "+this.pp3+" - "+sessionStorage.getItem('p4')+" "+this.pp4;
  }

  checkCollision(leftPaddle, rightPaddle, upPaddle, downPaddle) {
    if (this.x - this.radius < leftPaddle.x + leftPaddle.width &&
        this.y > leftPaddle.y &&
        this.y < leftPaddle.y + leftPaddle.height)
      this.dx *= -1;

    if (this.x + this.radius > rightPaddle.x &&
        this.y > rightPaddle.y &&
        this.y < rightPaddle.y + rightPaddle.height)
      this.dx *= -1;

    if (upPaddle != null &&
        this.y - this.radius < upPaddle.y + upPaddle.height &&
        this.x > upPaddle.x &&
        this.x < upPaddle.x + upPaddle.width)
      this.dy *= -1;

    if (downPaddle != null &&
        this.y + this.radius > downPaddle.y &&
        this.x > downPaddle.x &&
        this.x < downPaddle.x + downPaddle.width)
      this.dy *= -1;
  }  
}
