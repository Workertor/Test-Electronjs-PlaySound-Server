const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Ruta para servir archivos estáticos (HTML, CSS, JS, etc.) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Conexión de Socket.io
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Manejo de eventos para reproducir audio y video
  socket.on('playAudio', () => {
    // Lógica para reproducir audio en el salón de aula
    console.log('Reproduciendo audio en el salón de aula');
    io.emit('audioPlayed', 'Audio reproducido en el salón de aula');
  });

  // Manejo de eventos para reproducir audio y video
  socket.on('stopAudio', () => {
    // Lógica para reproducir audio en el salón de aula
    console.log('Detenido audio en el salón de aula');
    io.emit('audioStoped', 'Audio reproducido en el salón de aula');
  });

  socket.on('playVideo', () => {
    // Lógica para reproducir video en el salón de aula
    console.log('Reproduciendo video en el salón de aula');
    io.emit('videoPlayed', 'Video reproducido en el salón de aula');
  });

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
