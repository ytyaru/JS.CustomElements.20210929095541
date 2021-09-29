import CharacterCounter from './CharacterCounter.js';
import ReadingTime from './ReadingTime.js';
import Sub from './sub.js';
window.addEventListener('load', (event) => {
    let sub = new Sub();
    sub.show();
    customElements.define("character-counter", CharacterCounter);
    customElements.define("reading-time", ReadingTime);
});
