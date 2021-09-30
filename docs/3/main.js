import CharacterCounter from './CharacterCounter.js';
import ReadingTime from './ReadingTime.js';
window.addEventListener('load', (event) => {
    customElements.define("character-counter", CharacterCounter);
    customElements.define("reading-time", ReadingTime);
});
