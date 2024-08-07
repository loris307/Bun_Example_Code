// Definiert das Verhalten des Workers bei eingehenden Nachrichten
self.onmessage = event => {
	console.log("Nachricht vom Hauptthread erhalten:", event.data);
  
	// Sendet eine Antwort zurück zum Hauptthread
	postMessage("Hallo vom Worker!");
  };