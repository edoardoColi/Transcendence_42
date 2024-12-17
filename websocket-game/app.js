const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let rooms = {};

wss.on('connection', (ws) => {
  console.log('Client connected');
  let currentRoom = null;

  function joinRoom(roomId) {
    if (!rooms[roomId])
      rooms[roomId] = { players: [], state: createInitialState() };
    const room = rooms[roomId];
    if (room.players.length < 2) {
      room.players.push(ws);
      currentRoom = roomId;
      if (room.players.length === 2)
        startGame(roomId);
    } else {
      ws.send('Room is full');
      ws.close();
    }
  }

  function createInitialState() {
    return {
      paddle1Y: 150,
      paddle2Y: 150,
      ballX: 400,
      ballY: 200,
      ballSpeedX: 5,
      ballSpeedY: 5,
    };
  }

  function startGame(roomId) {
    const room = rooms[roomId];
    setInterval(() => {
      updateGameState(roomId);
    }, 1000 / 60);
  }

  function updateGameState(roomId) {
    const room = rooms[roomId];
    const state = room.state;
    state.ballX += state.ballSpeedX;
    state.ballY += state.ballSpeedY;
    if (state.ballY <= 0 || state.ballY >= 400)
      state.ballSpeedY = -state.ballSpeedY;
    if (state.ballX <= 10 && state.ballY >= state.paddle1Y && state.ballY <= state.paddle1Y + 100 ||
        state.ballX >= 780 && state.ballY >= state.paddle2Y && state.ballY <= state.paddle2Y + 100) {
      state.ballSpeedX = -state.ballSpeedX;
    }
    if (state.ballX < 0 || state.ballX > 800) {
      state.ballX = 400;
      state.ballY = 200;
      state.ballSpeedX = -state.ballSpeedX;
    }
    room.players.forEach(player => {
      player.send(JSON.stringify(state));
    });
  }
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    if (data.paddle1Y !== undefined) {
      const room = rooms[currentRoom];
      room.state.paddle1Y = data.paddle1Y;
    }
    if (data.paddle2Y !== undefined) {
      const room = rooms[currentRoom];
      room.state.paddle2Y = data.paddle2Y;
    }
  });

  ws.on('close', () => {
    if (currentRoom) {
      const room = rooms[currentRoom];
      room.players = room.players.filter(player => player !== ws);
      if (room.players.length === 0) {
        delete rooms[currentRoom];
      }
    }
    console.log('Client disconnected');
  });
  joinRoom('room1');
});
console.log('WebSocket server running on ws://localhost:8080');