import React, {Component} from 'react';

class TOD extends Component {
  render() {
    console.log('TOD R')
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while(i < data.length){
      lists.push( <li key={data[i].id}><a href="/content/{data[i].id}"
        // data-id={data[i].id}
        // data-title={data[i].title}
        onClick={ function(id, e) {
        e.preventDefault();
        this.props.changeMode(id);
    }.bind(this, data[i].id)}>{data[i].title}</a></li> )
      i++;
    }
    return (
        <div>
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        </div>
    );
  }
}

export default TOD;