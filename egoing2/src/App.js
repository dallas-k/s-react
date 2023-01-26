import React, { Component } from 'react';
import './App.css'

function App() {
  return (
    <div className="container">
        <h1>Hello World</h1>
        <FuncComp initNumber={new Date().toString()} />
        <ClassComp initNumber={new Date().toString()} />
    </div>
  );
}

function FuncComp(props) {
    const [num, setNum] = React.useState(props.initNumber);
    const onClick = () => {
        setNum(new Date().toString());
    }
    return (
        <div className='container'>
            <h2>function style component</h2>
            <p>Number : {num}</p>
            <button onClick={onClick}>change Num</button>
        </div>
    )
}

var classStyle = 'color: white; background:teal';
class ClassComp extends Component {
    state = {
        number : this.props.initNumber
    }
    // render 전에 실행
    UNSAFE_componentWillMount(){
        console.log('%cclass => componentWillMount 실행', classStyle)
    }
    render() {// class 형식의 특징
        console.log('%cclass => componentWillMount 실행 후 render', classStyle)
        return (
            <div className='container'>
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <input type='button' value='random' onClick={ function() {
                    this.setState( {number : new Date().toString() });
                }.bind(this)}></input>
            </div>
        )
    }
}

export default App;
