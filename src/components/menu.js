import React, {Component} from 'react';


class Menu extends Component {

    constructor(props){
        super(props);
            this.state = {
            focused: 0
        }
    }
    propTypes: {
        onItemClick: React.PropTypes.func.isRequired
    }

    clicked = (index) => {
        this.setState({focused: index});
        this.props.onItemClick(index);
    }

    render = () => {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            <div>
                <ul>{ this.props.items.map(function (m, index) {

                    var style = '';

                    if (self.state.focused == index) {
                        style = 'focused';
                    }

                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:

                    return <li key={index} className={style} onClick={self.clicked.bind(self, index)}><a>{m}</a></li>;

                }) }

                </ul>

            </div>
        );
    }
}

export default Menu;
