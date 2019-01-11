import styles from './RadioMark.module.scss';
import React from 'react';
import classnames from 'classnames';

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
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <input
      id={id}
      name={name}
      type="radio"
      onChange={handleChange}
      checked={checked}
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
