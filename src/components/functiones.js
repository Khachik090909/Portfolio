export function typeAndDeleteText(text, stateText, stateIndex, index) {
  let newText = text[0];
  for (let i = 1; i < text.length; i++) {
    setTimeout(() => {
      newText += text[i];
      stateText(newText);

      // Mettre à jour l'index une seule fois une fois que le texte est entièrement tapé
    }, i * 100); // Ajoutez un délai pour créer l'effet de tape-à-l'oeil
  }
  setTimeout(
    () => {
      for (let i = text.length - 1; i >= 0; i--) {
        setTimeout(() => {
          newText = newText.slice(0, -1);
          stateText(newText);
          if (newText === "") {
            stateIndex(index + 1);
          }
        }, i * 50); // Ajoutez un délai pour créer l'effet de tape-à-l'oeil
      }
    },
    text.length * 100 + 500
  );
}

export function typeText(text, state, speed) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      newText += text[i];
      state(newText);
    }, i * speed); // Ajoutez un délai pour créer l'effet de tape-à-l'oeil
  }
}
