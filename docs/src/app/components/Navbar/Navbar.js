import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

const Navbar = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root)}>
      <Text className={styles.logo} component="h1">
        invoker.
      </Text>
    </div>
  );
};

export default Navbar;
