import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="/create" onClick={(e) => {
                    e.preventDefault();
                    this.props.changeMode('create');
                }}>create</a></li>
                <li><a href="/update" onClick={(e) => {
                    e.preventDefault();
                    this.props.changeMode('update');
                }}>update</a></li>
                <li><button>Delete</button></li>
            </ul>
        );
    }
}

export default Control;