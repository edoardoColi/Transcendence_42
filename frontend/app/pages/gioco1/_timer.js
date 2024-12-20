import { activeTimers } from './../../js/router.js';

export function startCountdown(gameState, ball) {
  let countdown = sessionStorage.getItem('tempog1')*60;
  const timer = setInterval(() => {
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    if (countdown > 0) {
      countdown--;
    } else {
      clearInterval(timer);
      gameState.gameRunning=false;
      ball.gameover();
    }
    document.getElementById('tempo').innerHTML=minutes+" : "+seconds;
  }, 1000);
  activeTimers.push(timer);
}
