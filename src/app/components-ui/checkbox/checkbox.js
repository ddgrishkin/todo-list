import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import { compose } from 'redux';

import { configureClassname, getValuesByKeys } from 'utils';

import './styles.css';
import styles from './styles.css.json';

const cn = compose(
  getValuesByKeys(styles),
  configureClassname('checkbox'),
);

class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  @autobind
  onClick() {
    const { checked } = this.props;
    this.props.onSelect(!checked);
  }

  render() {
    const { checked } = this.props;
    const classname = classnames(
      styles.checkbox,
      ...cn({ checked }),
    );

    return (
      <div
        tabIndex={1}
        className={classname}
        onClick={this.onClick}
      />
    );
  }
}

Checkbox.propTypes = {
  onSelect: PropTypes.func,
  checked: PropTypes.bool, 
};

Checkbox.defaultProps = {
  onSelect: () => {},
  checked: false,
};

export default Checkbox;
