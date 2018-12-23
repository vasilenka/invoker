import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

// import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Github } from './github.svg';

import Text from './../Text/Text';

const Navbar = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.container)}>
        <Text className={styles.name} heading4 component="h1">
          Invoker
        </Text>
        <a
          href="https://github.com/vasilenka/invoker"
          className={styles.githubLink}
        >
          <Github className={styles.github} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
