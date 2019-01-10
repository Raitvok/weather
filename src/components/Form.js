import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" placeholder="City" name="city"/>
                <button>Search</button>
            </form>
        )
    }
}

export default Form;