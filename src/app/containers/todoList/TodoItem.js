import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import autobind from 'autobind-decorator';
import connect from 'redux-connect-decorator';
import classnames from 'classnames';

import { Checkbox } from 'components-ui';
import { configureClassname, getValuesByKeys } from 'utils';

import {
  completeItem, 
  deleteItem,
  editItem
} from './__data__/actions';

import './styles/item.css';
import styles from './styles/item.css.json';

const cn = compose(
  getValuesByKeys(styles),
  configureClassname('item'),
);

@connect(
  (state, ownProps) => ({
    id: ownProps.id,
    text: ownProps.text,
    completed: ownProps.completed,
    active: state.todoList.active,
  }),
  {
    deleteItem,
    completeItem,
    editItem,
  }
)

class TodoItem extends React.Component {
  @autobind
  handleSelect(value) {
    if (this.props.active !== this.props.id) {
      this.props.completeItem(this.props.id, value);
    }
  }

  @autobind
  handleDelete() {
    if (this.props.active !== this.props.id) {
      this.props.deleteItem(this.props.id);
    }
  }

  @autobind
  handleEdit() {
    if (!this.props.completed) {
      this.props.editItem(this.props.id, this.props.text);
    }
  }

  render() {
    const { completed, text, active, id } = this.props;
    const editable = active === id;
    const className = classnames(
      styles.item,
      ...cn({ completed, editable })
    );

    return (
      <div className={className}>
        <Checkbox 
          className={styles.checkbox}
          onSelect={this.handleSelect}
          checked={completed}
        />

        <div className={styles.text}>{text}</div>
        <div className={styles.menu}>
          <div onClick={this.handleEdit} className={styles.edit} />
          <div onClick={this.handleDelete} className={styles.delete} />
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

TodoItem.defaultProps = {
  text: '',
  completed: false,
};

export default TodoItem;
