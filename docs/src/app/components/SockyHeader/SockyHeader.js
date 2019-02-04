import styles from './SockyHeader.module.scss';
import React from 'react';
import cx from 'classnames';

import { ReactComponent as Close } from './close.svg';

const SockyHeader = ({ children, className, onClick, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true
      })}
    >
      {children}
      <div className={styles.close}>
        <Close onClick={onClick} />
      </div>
    </div>
  );
};

export default SockyHeader;
