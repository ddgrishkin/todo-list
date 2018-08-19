import React from 'react';
import autobind from 'autobind-decorator';
import connect from 'redux-connect-decorator';

import { Input } from 'components-ui';
import TodoItem from './TodoItem';

import { createTodoItem, changeField } from './__data__/actions';

import './styles/list.css';
import styles from './styles/list.css.json';

const KEYCODE = { ENTER: 13 };

@connect(
  (state) => ({
    byId: state.todoList.byId,
    allIds: state.todoList.allIds,
    currentTask: state.todoList.currentTask,
  }),
  {
    changeField,
    createTodoItem,
  }
)

class TodoList extends React.PureComponent {
  @autobind
  onInputKeyPress(e) {
    if (e.charCode === KEYCODE.ENTER) {
      if (this.props.currentTask.replace(/\s+/g, '') !== '') {
        this.props.createTodoItem(this.props.currentTask);
        this.props.changeField('');
      }
    }
  }

  renderTodoListItems() {
    const { allIds, byId } = this.props;

    if (allIds.length) {
      return allIds.map((id) => {
        const { text, completed } = byId[id];

        return (
          <TodoItem 
            id={id}
            key={id}
            text={text}
            completed={completed}
          />
        );
      });
    }

    return null;
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>TODO List</h1>
        <div className={styles.panel}>
          <Input 
            maxLength={45}
            placeholder="Add a task..."
            value={this.props.currentTask}
            onChange={this.props.changeField}
            onKeyPress={this.onInputKeyPress}
          />

          <div className={styles.list}>
            {this.renderTodoListItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;
