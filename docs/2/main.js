import CharacterCounter from './CharacterCounter.js';
window.addEventListener('load', (event) => {
    customElements.define("character-counter", CharacterCounter);
});
