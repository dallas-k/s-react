import React, { Component } from 'react';

class Cycle extends Component {
    constructor(props) {
        super(props);
        console.log('consturctor');
    }
    componentDidMount() {
        console.log('DidMount');
    }
    componentDidUpdate() {
        console.log('DidUpdate');
    }
    componentWillUnmount() {
        console.log('WillUnmount');
    }
    render() {
        console.log('Render');
        return (
            <div>
                Life Cycle Test
            </div>
        )
    }
}

export default Cycle;