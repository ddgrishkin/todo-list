import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import styles from './styles.css.json'; 

class TodoList extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          
        </div>
      </div>
    )
  }
}

export default connect()(TodoList);
