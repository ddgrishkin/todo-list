import React from 'react';
import autobind from 'autobind-decorator';
import connect from 'redux-connect-decorator';

import { Input } from 'components-ui';
import TodoItem from './TodoItem';

import { 
  createItem,
  updateItem,
  changeField,
  receiveItems,
} from './__data__/actions';

import './styles/list.css';
import styles from './styles/list.css.json';

const KEYCODE = { ENTER: 13 };

@connect(
  (state) => ({
    byId: state.todoList.byId,
    allIds: state.todoList.allIds,
    active: state.todoList.active,
    task: state.todoList.task,
  }),
  {
    changeField,
    receiveItems,
    updateItem,
    createItem,
  }
)

class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.props.receiveItems();
  }

  componentDidUpdate() {
    this.placeDataToStorage();

    if (this.props.active) {
      this.inputRef.current.focus();
    }
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  placeDataToStorage() {
    const { allIds, byId } = this.props;
    const ls = window.localStorage;

    ls.setItem('allIds', JSON.stringify(allIds));
    ls.setItem('byId', JSON.stringify(byId));
  }

  @autobind
  onInputKeyPress(e) {
    // TODO Add button for mobile
    if (e.charCode === KEYCODE.ENTER) {
      const { task, active } = this.props;

      if (task && task.replace(/\s+/g, '') !== '') {
        active 
          ? this.props.updateItem(active, task) 
          : this.props.createItem(task);
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

  renderEmptyList() {
    return (
      <div className={styles.empty}>
        <p>Sorry, you have no tasks...</p>
        <p>Print some task in the input overhead.</p>
        <p>Then press ENTER to add.</p>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>TODO List</h1>
        <div className={styles.panel}>
          <Input 
            maxLength={45}
            ref={this.inputRef}
            value={this.props.task}
            placeholder="Add a task..."
            onChange={this.props.changeField}
            onKeyPress={this.onInputKeyPress}
          />

          <div className={styles.list}>
            {this.props.allIds.length 
              ? this.renderTodoListItems()
              : this.renderEmptyList()
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;
