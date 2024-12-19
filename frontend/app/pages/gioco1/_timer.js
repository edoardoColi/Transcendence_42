export function startCountdown(gameState) {
  let countdown = sessionStorage.getItem('tempog1')*60;
  const timer = setInterval(() => {
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    if (countdown > 0) {
      countdown--;
    } else {
      console.log('Tempo scaduto!');
      clearInterval(timer);
      gameState.gameRunning=false;
    }
    document.getElementById('tempo').innerHTML=minutes+" : "+seconds;
  }, 1000);
}
