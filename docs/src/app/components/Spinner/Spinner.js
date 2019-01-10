import styles from './Spinner.module.scss';
import React from 'react';
import classnames from 'classnames';

const Spinner = ({ className, ...restProps }) => {
  return (
    <div
      className={classnames({ [styles.root]: true, [className]: className })}
      {...restProps}
    >
      <div className={styles.loader} />
    </div>
  );
};

export default Spinner;
