import styles from './NavbarAvatar.module.scss';
import React from 'react';
import cx from 'classnames';

import Image from '../../primitives/Image/Image';

const NavbarAvatar = ({ children, src, className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <div className={styles.container}>
        <Image src={src} fit="cover" className={styles.picture} />
        {children}
      </div>
    </div>
  );
};

export default NavbarAvatar;
