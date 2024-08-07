// URL des WebSocket-Servers
const url = 'ws://localhost:3000'; // Stellen Sie sicher, dass Sie die richtige URL und den Port angeben

// Erstellen des WebSocket-Clients
const socket = new WebSocket(url);

// Event Handler, wenn die Verbindung geöffnet wird
socket.addEventListener('open', function (event) {
    console.log('Verbindung hergestellt!');
    // Senden einer Nachricht an den Server
    socket.send('Hallo Server!');
});

// Event Handler für eingehende Nachrichten
socket.addEventListener('message', function (event) {
    console.log('Nachricht vom Server erhalten:', event.data);
    // Sie können hier weitere Logik hinzufügen, um auf die Nachricht zu reagieren
});

// Event Handler, wenn die Verbindung geschlossen wird
socket.addEventListener('close', function (event) {
    console.log('Verbindung geschlossen:', event.code, event.reason);
});

// Event Handler für Fehler
socket.addEventListener('error', function (event) {
    console.error('Fehler:', event);
});
