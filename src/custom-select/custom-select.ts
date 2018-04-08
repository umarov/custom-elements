import { CustomOption } from '../custom-option/custom-option';
import html from './custom-select.html';

export class CustomSelect extends HTMLElement {
  public autofocus = false;
  public disabled = false;
  public form: HTMLFormElement;
  public length = 0;
  public multiple = false;
  public name = '';
  public options = new Map<number, CustomOption>();
  public required = false;
  public selectedIndex = -1;
  public selectedOptions: CustomOption[];
  public size = 0;
  public type = 'select-one';
  public readonly validationMessage = 'Please select something';
  public value = '';
  public willValidate = true;

  private selectedElement: HTMLDivElement | null;
  private optionsElement: HTMLDivElement | null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = html;
    shadow.appendChild(template.content.cloneNode(true));
    this.selectedOptions = [];

    if (this.parentElement) {
      if (this.parentElement instanceof HTMLFormElement) {
        this.form = this.parentElement;
      } else if (this.parentElement.parentElement instanceof HTMLFormElement) {
        this.form = this.parentElement.parentElement;
      } else {
        this.form = document.createElement('form');
      }
    } else {
      this.form = document.createElement('form');
    }

    this.optionsElement = shadow.querySelector('#options');
    this.selectedElement = shadow.querySelector('#selected');
  }

  public optionChildren(): CustomOption[] {
    return Array.from(this.children) as CustomOption[];
  }

  public connectedCallback() {
    this.optionChildren().map((option, index) => {
      if (option.selected) {
        this.selectedOptions.push(option);
        this.value = option.value;
      }
      this.options.set(index, option);
    });

    const firstOption = this.options.get(0);
    if (this.selectedOptions.length === 0 && firstOption) {
      this.selectedOptions = [firstOption];
    }

    this.size = this.children.length;

    this.renderOptions();
    this.renderSelected();

    this.selectedElement!.addEventListener('click', ({ target }) => {
      this.selectedElement!.classList.toggle('hidden');
      this.optionsElement!.classList.toggle('hidden');
    });
    this.optionsElement!.addEventListener('click', ({ target }) => {
      if (target !== this.selectedOptions[0]) { this.select(target as CustomOption); }

      this.optionsElement!.classList.toggle('hidden');
      this.selectedElement!.classList.toggle('hidden');
    });
  }

  public renderSelected() {
    requestAnimationFrame(() => {
      if (this.selectedElement) {
        this.selectedElement.appendChild(this.selectedOptions[0].cloneNode(true));
      }
    });
  }

  public renderOptions() {
    for (const option of this.options.values()) {
      requestAnimationFrame(() => {
        this.optionsElement!.appendChild(option);
      });
    }
  }

  public select(selectedOption: CustomOption) {
    this.selectedElement!.innerHTML = '';
    this.selectedOptions = [selectedOption];
    this.renderSelected();
  }

  public add(newOption: CustomOption) {
    const index = this.optionChildren().findIndex((option) => option === newOption);
    this.options.set(index, newOption);
  }

  public checkValidity() {
    return true;
  }

  public item(index: number) {
    return this.options.get(index);
  }
}
