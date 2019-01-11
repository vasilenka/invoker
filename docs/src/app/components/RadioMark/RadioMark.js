import styles from './RadioMark.module.scss';
import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { RadioContext } from '../context/context';

const RadioMark = ({
  className,
  checked,
  value,
  id,
  name,
  large,
  onChange,
  onClick,
  ...restProps
}) => {
  const context = useContext(RadioContext);

  const handleChange = e => context.state.onChange(e.target.value);

  return (
    <input
      id={`radio__${context.props.name}${id}`}
      name={context.props.name}
      type="radio"
      onChange={handleChange}
      checked={checked || value === context.state.selected}
      value={value}
      className={classnames({
        [styles.root]: true,
        [styles.normal]: !large,
        [styles.large]: large,
        [className]: className
      })}
      {...restProps}
    />
  );
};

export default RadioMark;
