let speechSynthesisInstance;


document.getElementById('control').addEventListener('click', function () {
  const button = document.getElementById('control');

  if (speechSynthesisInstance && speechSynthesis.speaking) {
    // Si se está reproduciendo algo, detenerlo
    speechSynthesis.cancel();
    button.textContent = 'Play ⏵︎';
  } else {
    // Si no hay nada reproduciéndose, reproducir el texto
    const texto = document.getElementById('chat-input').value;
    if (texto.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(texto);
      speechSynthesis.speak(utterance);
      speechSynthesisInstance = utterance;
      button.textContent = 'Stop ⏹︎';//➤⏹︎⏺︎⏵︎
      button.style.display = 'none'
      // Cambiar el botón a "Play" cuando la reproducción termine
      utterance.onend = function () {
        button.textContent = 'Play ⏵︎';
      };
    }
  }
});