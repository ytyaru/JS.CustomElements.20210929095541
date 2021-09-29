export default class ReadingTime extends HTMLElement {
    constructor() {
        super();
        this._selector = "body"
        this._unit = "分";
        this._isWithoutWhiteSpace = false;
        this._count = this.count(this._selector);
    }
    count(selector='body') {
        let target = document.querySelector(selector);
        let str = target.textContent
        if (this._isWithoutWhiteSpace == true) { str = str.replace(/\s+/g, ""); }
        let time = ~~(str.length / 400);
        console.log(time, str)
        return (time < 1) ? 1 : time;
    }
    static get observedAttributes() { return ['selector', 'unit', 'space']; }
    attributeChangedCallback(name, oldValue, newValue) {
        if ("selector" == name) {
            this._selector = newValue;
            this._count = this.count(this._selector);
        }
        if ("unit" == name) { this._unit = newValue; }
        if ("space" == name) {
            this._isWithoutWhiteSpace = true;
            const falseValues = ['0', 'off', 'false'];
            if (falseValues.includes(newValue)) { this._isWithoutWhiteSpace = false; }
            this._count = this.count(this._selector);
        }
        this._updateRendering();
    }
    get unit() { return this._unit; }
    set unit(v) { this.setAttribute("unit", v); }
    connectedCallback() { this._updateRendering(); }
    _updateRendering() {
        this.innerHTML = `${this._count}<span class="reading-time-unit">${this._unit}</span>`
    }
}
