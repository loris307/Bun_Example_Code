Bun.serve({
	fetch(req, server) {
	  // Versuche, die Anfrage zu einem WebSocket zu upgraden
	  if (server.upgrade(req)) {
		return; // Wenn erfolgreich, return nichts (die Verbindung bleibt als WebSocket offen)
	  }
	  return new Response("Upgrade failed", { status: 500 }); // Upgrade fehlgeschlagen
	},
	websocket: {
	  open(ws) {
		console.log("Neue WebSocket-Verbindung geöffnet");
	  },
	  message(ws, message) {
		console.log("Nachricht erhalten:", message);
		ws.send(message); // Echo der Nachricht zurück an den Sender
	  },
	  close(ws, code, message) {
		console.log("WebSocket geschlossen mit Code", code);
	  },
	  drain(ws) {
		console.log("WebSocket bereit für mehr Daten");
	  },
	},
  });