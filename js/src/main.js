import BaseComponent from './base-component';
import { Tier1Pack } from './cards/tier1';

class CCG {
    constructor(selector) {
        React.render(<ExampleComponent />, document.querySelector(selector));
    }
}

class ExampleComponent extends BaseComponent {
    constructor() {
        super();
        this._bind('_handleClick');
    }
    render() {
        return <div onClick={this._handleClick}>Hello, world.</div>;
    }
    _handleClick() {
        console.log(this);
        alert('Click');
    }
}

new CCG('#ccgRoot');
