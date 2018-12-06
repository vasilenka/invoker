import styles from './Checkbox.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';
import Checkmark from './../Checkmark/Checkmark';

class Checkbox extends Component {
  state = {
    hover: false
  };

  onHover = e => {
    this.setState({
      ...this.state,
      hover: true
    });
  };

  onLeave = e => {
    this.setState({
      ...this.state,
      hover: false
    });
  };

  render() {
    let {
      name,
      id,
      value,
      isChecked,
      children,
      className,
      ...restProps
    } = this.props;
    return (
      <label
        {...restProps}
        className={styles.root}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        <Text className={styles.label} large>
          {children}
        </Text>
        <Checkmark
          component="div"
          className={styles.box}
          onHover={this.state.hover}
        />
      </label>
    );
  }
}

export default Checkbox;
