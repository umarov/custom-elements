import { CustomOption } from './custom-option/custom-option';
import { CustomSelect } from './custom-select/custom-select';

customElements.define('custom-select', CustomSelect, { extends: 'select' });
customElements.define('custom-option', CustomOption, { extends: 'option' });
