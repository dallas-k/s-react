import React, {Component} from 'react';
import TOD from './components/TOD';
import Content from './components/Content';

class Subject extends Component {
  render() {
    console.log('Sub R')
    return (
      <header>
        <h1><a href='/' 
        onClick={function(e) {
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}> {this.props.title} </a></h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject : {title : 'Web', sub : 'World Wide Web'},
      mode : 'read',
      selected_id : 0,
      contents : [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'},
      ],
      welcome : {title : 'Welcome', desc : 'Hello, React!!'}
    }
  }
  render() {
    console.log('APP R')
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
        if(this.state.selected_id===1){
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        if(this.state.selected_id===2){
            _title = this.state.contents[1].title;
            _desc = this.state.contents[1].desc;
        }
        if(this.state.selected_id===3){
            _title = this.state.contents[2].title;
            _desc = this.state.contents[2].desc;
        }
    }

    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        onChangePage = {function() {this.setState({mode : 'welcome'});}.bind(this)}>
        </Subject>
        {/* <header>
          <h1><a href='/' onClick={function(e) {
            e.preventDefault();
            this.setState(
              {mode : "welcome"}
            )
            }.bind(this)}>Header</a></h1>
        </header> */}
        <TOD data={this.state.contents} changeMode={function(id) {
            this.setState({mode : 'read', selected_id : Number(id)});
            console.log(this.state.selected_id);
            console.log(this.state.mode);
        }.bind(this)}/>
        <Content title={_title} desc={_desc} />
      </div>
    )
  }
}

export default App;
