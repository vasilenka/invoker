import styles from './Preview.module.scss';
import React from 'react';
import classnames from 'classnames';

const Preview = ({ clean, children, className, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.clean]: clean
      })}
    >
      {children}
    </div>
  );
};

export default Preview;
