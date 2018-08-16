import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import { Checkbox } from 'components-ui';

class TodoItem extends React.Component {
  @autobind
  handleSelect() {
    this.props.onSelect(this.props.id);
  }

  render() {
    return (
      <div>
        <Checkbox onSelect={this.handleSelect} />
        <div>{this.props.text}</div>
        <div></div>
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
