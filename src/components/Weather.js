import React, {Component} from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && <p>location:  {this.props.city}</p>}
                {this.props.temp && <p>temerature:  {this.props.temp}</p>}
                {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
                {this.props.description && <p>description: {this.props.description}</p>}
            </div>
        )
    }
}

export default Weather;