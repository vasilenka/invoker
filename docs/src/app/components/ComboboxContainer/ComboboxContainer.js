import styles from './ComboboxContainer.module.scss';
import React from 'react';
import cx from 'classnames';

const ComboboxItem = ({ children, component, className, ...restProps }) => {
  let Component = component || 'ul';

  return (
    <Component
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default ComboboxItem;
