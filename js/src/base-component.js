/**
 *
 */
export default class BaseComponent extends React.Component
{
    //constructor() {
    //    super();
        // instead of getInitialState()
        //this.state = {};
    //}

    _bind(...methods) {
        methods.forEach(method => this[method] = this[method].bind(this));
    }
}

/*
ExampleComponent.propTypes = {
    aStringProp: React.PropTypes.string
};
ExampleComponent.defaultProps = {
    aStringProp: ''
};
*/
