export class CustomOption extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <slot></slot>
    `;
    shadow.appendChild(template.content.cloneNode(true));
  }
}
