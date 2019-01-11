import styles from './Toast.module.scss';
import React from 'react';
import classnames from 'classnames';

const Toast = ({ className, children, ...restProps }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 150,
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        <div className={styles.toast}>{children}</div>
      </div>
    </div>
  );
};

export default Toast;
