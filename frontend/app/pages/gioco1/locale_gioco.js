import { startCountdown } from './_timer.js';
import { Paddle } from './_paddle_uman.js';
import { Ball } from './_ball.js';

function gameLoop(canvas, leftPaddle, rightPaddle, upPaddle, downPaddle, ball, gameState) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    leftPaddle.draw(ctx);
    leftPaddle.update(canvas);
  
    rightPaddle.draw(ctx);
    rightPaddle.update(canvas);

    if(sessionStorage.getItem('nplayerg1')==3 || sessionStorage.getItem('nplayerg1')==4){
        upPaddle.draw(ctx);
        upPaddle.update(canvas);
    }

    if(sessionStorage.getItem('nplayerg1')==4){
        downPaddle.draw(ctx);
        downPaddle.update(canvas);
    }

    ball.draw(ctx);
    ball.update(canvas, leftPaddle, rightPaddle);
    ctx.fillStyle='white';
    ctx.font='bold 30px Arial';
    ctx.textAlign='center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PONG', canvas.width / 2, canvas.height / 2);
    ball.checkCollision(leftPaddle, rightPaddle, upPaddle, downPaddle);
    if (gameState.gameRunning)
        requestAnimationFrame(() => gameLoop(canvas, leftPaddle, rightPaddle, upPaddle, downPaddle, ball, gameState));
}

export function loadLocaleGame1Page() {
    if(sessionStorage.getItem('lingua')==null)
        sessionStorage.setItem('lingua', 'it');
    import(`./../../traduzioni/${sessionStorage.getItem('lingua')}.js`)
    .then((module) => {
        const text = module.text;
        const content = document.getElementById('main-content');
        content.innerHTML = `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1 class="h3 mb-3 fw-normal text-white" id="testo">`+text.p22+`</h1>
                <h2 class="h3 mb-3 fw-normal text-white" id="tempo">0 : 0</h2>
                <canvas class="h-100 w-100" id="gameCanvas"></canvas>
            </div>
        `;
        const canvas = document.getElementById('gameCanvas');
        const paddleWidth = 5;
        const paddleHeight = 50;
    
        const leftPaddle = new Paddle(10, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 'w', 's', 'sg');
        const rightPaddle = new Paddle(canvas.width - paddleWidth - 10, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 'ArrowUp', 'ArrowDown', 'sg');
        let upPaddle = null;
        let downPaddle = null;
        if(sessionStorage.getItem('nplayerg1')==3 || sessionStorage.getItem('nplayerg1')==4)
            upPaddle = new Paddle(canvas.width / 2 - paddleHeight / 2, 10, paddleHeight, paddleWidth, 'v', 'b', 'ds');
        if(sessionStorage.getItem('nplayerg1')==4)
            downPaddle = new Paddle(canvas.width / 2 - paddleHeight / 2, canvas.height - 10 - paddleWidth, paddleHeight, paddleWidth, '2', '3', 'ds');
        const ball = new Ball(canvas.width / 2, canvas.height / 2, 3);
    
        let gameState = {
            gameRunning: false,
            gameStart: false,
        };
        gameLoop(canvas, leftPaddle, rightPaddle, upPaddle, downPaddle, ball, gameState);
        document.addEventListener('keydown', (e) => {
            if (e.key === ' '){
                if (gameState.gameStart==false){
                    gameState.gameRunning = true;
                    gameState.gameStart = true;
                    document.getElementById('testo').innerHTML=sessionStorage.getItem('p1')+" 0 - 0 "+sessionStorage.getItem('p2');
                    gameLoop(canvas, leftPaddle, rightPaddle, upPaddle, downPaddle, ball, gameState);
                    startCountdown(gameState);
                }
            }
        });
    })
}
