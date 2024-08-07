// Erstellt einen neuen Worker, der das Skript worker.js ausführt
const worker = new Worker("./worker.js");

// Sendet eine Nachricht an den Worker
worker.postMessage("Hallo vom Hauptthread!");

// Definiert, wie auf Nachrichten vom Worker reagiert werden soll
worker.onmessage = event => {
  console.log("Nachricht vom Worker erhalten:", event.data);
  worker.terminate(); // Beendet den Worker, nachdem die Nachricht empfangen wurde
};

// Fängt Fehler vom Worker auf
worker.onerror = error => {
  console.error("Worker Fehler:", error.message);
};
