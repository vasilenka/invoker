import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

const Navbar = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <Text className={styles.logo} normal component="h1">
        Hello from the docs!
      </Text>
    </div>
  );
};

export default Navbar;
