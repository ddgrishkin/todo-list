import React from 'react';
import connect from 'redux-connect-decorator';

import { TodoItem } from 'components';
import { Button } from 'components-ui';

import { createTodoItem, completeTodoItem } from './actions';

import './styles.css';
import styles from './styles.css.json'; 

@connect(
  (state) => ({
    allIds: state.todoList.allIds,
    byId: state.todoList.byId,
  }),
  (dispatch) => ({
    createTodoItem: (text) => dispatch(createTodoItem(text)),
    completeTodoItem: (id) => dispatch(completeTodoItem(id)),
    // deleteTodoItem: (id) => dispatch(deleteTodoItem(id))
  })
)

class TodoList extends React.Component {
  renderTodoItem({ id, text, completed }) {
    return (
      <TodoItem 
        key={id}
        id={id}
        text={text}
        completed={completed}
        onComplete={this.props.completeTodoItem}
      />
    );
  }

  renderTodoListItems() {
    const { allIds, byId } = this.props;

    return allIds.map((id) => {
      return this.renderTodoItem(byId[id]);
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>TODO List</h1>
        <div className={styles.panel}>
          <div>
            <Button>Create</Button>
          </div>

          <div className={styles.list}>
            {this.renderTodoListItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;
