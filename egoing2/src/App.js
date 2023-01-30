import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import Control from "./components/Control"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            selected_content_id: 0,
            subject: { title: 'WEB', sub: 'World Wide Web!' },
            welcome: { title: 'Welcome', desc: 'Hello, React!!' },
            contents: [
                { id: 1, title: 'HTML', desc: 'HTML is for information' },
                { id: 2, title: 'CSS', desc: 'CSS is for design' },
                { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
            ]
        }
    }
    render() {
        console.log('App 렌더링 완료');
        var _title, _desc, _article = null;
        _title = this.state.subject.title;
        _desc = this.state.subject.sub;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <Content title={_title} desc={_desc} />
        } else if (this.state.mode === 'read') {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    
                    break;
                }
                i = i + 1;
            }
            _article = <Content title={_title} desc={_desc} />
        }
        console.log("render", this);
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({ mode: 'welcome' });
                    }.bind(this)}
                ></Subject>
                <TOC
                    onChangePage={function (id) {
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id)
                        });
                    }.bind(this)}
                    data={this.state.contents}></TOC>
                <Control changeMode={
                    (e) => {
                        this.setState({
                            mode: e
                        })
                    }
                } />
                {_article}
            </div>
        );
    }
}

export default App;