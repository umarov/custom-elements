import html from './custom-option.html';

export class CustomOption extends HTMLElement {
  public selected = false;
  public value = '';

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = html;
    shadow.appendChild(template.content.cloneNode(true));
  }
}
