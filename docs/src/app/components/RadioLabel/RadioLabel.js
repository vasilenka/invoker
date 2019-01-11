import styles from './RadioLabel.module.scss';
import React from 'react';
import classnames from 'classnames';

const RadioLabel = ({ children, className, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default RadioLabel;
