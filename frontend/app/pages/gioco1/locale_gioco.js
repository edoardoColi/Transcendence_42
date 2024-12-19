import { startCountdown } from './_timer.js';
import { Paddle } from './_paddle_uman.js';
import { Ball } from './_ball.js';

function gameLoop(canvas, leftPaddle, rightPaddle, ball, gameState) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    leftPaddle.draw(ctx);
    leftPaddle.update(canvas);
  
    rightPaddle.draw(ctx);
    rightPaddle.update(canvas);
    ball.draw(ctx);
    ball.update(canvas, leftPaddle, rightPaddle);
    ball.checkCollision(leftPaddle, rightPaddle);
    if (gameState.gameRunning)
        requestAnimationFrame(() => gameLoop(canvas, leftPaddle, rightPaddle, ball, gameState));
}

export function loadLocaleGame1Page() {
    const content = document.getElementById('main-content');
    content.innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="h3 mb-3 fw-normal text-white" id="testo">Premi [Spazio] per iniziare</h1>
            <h2 class="h3 mb-3 fw-normal text-white" id="tempo">0 : 0</h2>
            <canvas class="h-100 w-100" id="gameCanvas"></canvas>
        </div>
    `;
    const canvas = document.getElementById('gameCanvas');
    const paddleWidth = 5;
    const paddleHeight = 50;

    const leftPaddle = new Paddle(10, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 'w', 's');
    const rightPaddle = new Paddle(canvas.width - paddleWidth - 10, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 'ArrowUp', 'ArrowDown');
    const ball = new Ball(canvas.width / 2, canvas.height / 2, 3);

    let gameState = {
        gameRunning: false,
        gameStart: false,
    };
    document.addEventListener('keydown', (e) => {
        if (e.key === ' '){
            if (gameState.gameStart==false){
                gameState.gameRunning = true;
                gameState.gameStart = true;
                document.getElementById('testo').innerHTML=sessionStorage.getItem('p1')+" 0 - 0 "+sessionStorage.getItem('p2');
                gameLoop(canvas, leftPaddle, rightPaddle, ball, gameState);
                startCountdown(gameState);
            }
        }
    });
}
