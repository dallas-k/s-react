import React, {Component} from 'react';
import styles from './tod.module.css'

class Content extends Component {
  render() {
    console.log('Content R')
    return (
        <div className={styles.target} >
            <article>
                <h2 id={styles.name}> {this.props.title} </h2>
                {this.props.desc}
            </article>
        </div>
    );
  }
}

export default Content;