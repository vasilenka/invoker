import styles from './NavbarBrand.module.scss';
import React from 'react';
import cx from 'classnames';

import { ReactComponent as Logo } from './logo/dark.svg';

const NavbarBrand = ({ children, className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <div className={styles.brandContainer}>
        {children || <Logo className={styles.brand} />}
      </div>
    </div>
  );
};

export default NavbarBrand;
