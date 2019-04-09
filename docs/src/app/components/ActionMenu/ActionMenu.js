import styles from './ActionMenu.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../../primitives/Text/Text';

const ActionMenu = ({ children, className, active, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles.active]: active,
        [className]: className
      })}
      {...restProps}
    >
      <Text small>Menu</Text>
    </div>
  );
};

export default ActionMenu;
