import styles from './Accordion.module.scss';
import React from 'react';
import cx from 'classnames';

const Accordion = ({ children, className, ...restProps }) => {
  return <div className={cx(styles.root)}>{children}</div>;
};

export default Accordion;
