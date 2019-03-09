import styles from './NavbarAvatar.module.scss';
import React from 'react';
import cx from 'classnames';

import Image from '../../primitives/Image/Image';
import Popout from './../../primitives/Popout/Popout';

const content = (
  <div className={styles.menuContainer}>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
  </div>
);

const NavbarAvatar = ({ children, src, className, ...restProps }) => {
  return (
    <Popout
      withArrow={false}
      bottomRight
      content={content}
      containerClassName={styles.popout}
    >
      {(setVisible, visible) => (
        <div
          onClick={() => setVisible(!visible)}
          className={cx({
            [styles.root]: true,
            [className]: className
          })}
          {...restProps}
        >
          <div className={styles.container}>
            <Image src={src} fit="cover" className={styles.picture} />
          </div>
        </div>
      )}
    </Popout>
  );
};

export default NavbarAvatar;
