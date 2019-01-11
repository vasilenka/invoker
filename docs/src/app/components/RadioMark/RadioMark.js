import styles from './RadioMark.module.scss';
import React from 'react';
import classnames from 'classnames';

const RadioMark = ({ small, className, ...restProps }) => {
  return (
    <input
      type="radio"
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.medium]: !small,
        [small]: small
      })}
      {...restProps}
    />
  );
};

export default RadioMark;
