export default class CharacterCounter extends HTMLElement {
    constructor() {
        super();
        this._selector = "body"
        this._unit = "字";
        this._withWhiteSpace = false;
        this._count = this.count(this._selector);
    }
    count() {
        let target = document.querySelector(this._selector);
        let str = target.textContent
        if (!this._withWhiteSpace) { str = str.replace(/\s+/g, ""); console.log(`${str.length} this._withWhiteSpace=${this._withWhiteSpace}`); }
        return str.length;
    }
    static get observedAttributes() { return ['selector', 'unit', 'space']; }
    attributeChangedCallback(name, oldValue, newValue) {
        let isRecount = false;
        if ("selector" == name) {
            this._selector = newValue;
            isRecount = true;
        }
        if ("unit" == name) { this._unit = newValue; }
        if ("space" == name) {
            this._withWhiteSpace = true;
            const falseValues = ['0', 'off', 'false'];
            if (falseValues.includes(newValue)) { this._withWhiteSpace = false; }
            isRecount = true;
        }
        if (isRecount) { this._count = this.count(this._selector); }
        this._updateRendering();
    }
    get unit() { return this._unit; }
    set unit(v) { this.setAttribute("unit", v); }
    connectedCallback() { this._updateRendering(); }
    _updateRendering() {
        this.innerHTML = `${this._count}<span class="character-counter-unit">${this._unit}</span>`
    }
}
