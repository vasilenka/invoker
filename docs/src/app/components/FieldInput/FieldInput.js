import styles from './FieldInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class FieldInput extends Component {
  render() {
    const {
      className,
      id,
      onClick,
      small,
      type,
      placeholder,
      value,
      error,
      inline,
      ...restProps
    } = this.props;
    return (
      <input
        {...restProps}
        onClick={onClick}
        type={type || 'text'}
        id={id}
        className={classnames({
          [styles.root]: true,
          [styles.normal]: !small,
          [styles.small]: small,
          [styles.stack]: !inline,
          [styles.inline]: inline,
          [styles.error]: error,
          [className]: className
        })}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

export default FieldInput;
