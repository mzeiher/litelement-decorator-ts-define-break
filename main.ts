import { LitElement, property, html } from './node_modules/lit-element/lit-element.js';


export class MyElement extends LitElement {

    @property({type: String, reflect: true})
    property: string = 'init';

    render() {
        return html`<div>${this.property}</div>`
    }
}
customElements.define('my-element', MyElement);