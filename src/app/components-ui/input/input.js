import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import './styles.css';
import styles from './styles.css.json';

class Input extends React.PureComponent {
  @autobind
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const {
      onKeyPress,
      placeholder,
      maxLength,
    } = this.props;

    return (
      <input
        type="text"
        value={this.props.value}
        placeholder={placeholder}
        maxLength={maxLength}
        className={styles.input}
        onKeyPress={onKeyPress}
        onChange={this.onChange}
      />
    )
  }
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  onKeyPress: () => {},
};

export default Input;
