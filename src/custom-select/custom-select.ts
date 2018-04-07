import html from './custom-select.html';

export class CustomSelect extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = html;
    shadow.appendChild(template.content.cloneNode(true));
    console.log(this.children);
  }

  public connectedCallback() {
    console.log(this.children);
  }
}
