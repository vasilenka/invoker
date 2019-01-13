import styles from './CheckLabel.module.scss';
import React, { useContext, useState } from 'react';
import cx from 'classnames';

import Text from './../Text/Text';
import { CheckboxContext } from '../context/context';

const CheckLabel = ({
  label,
  className,
  isDisabled,
  onClick,
  ...restProps
}) => {
  const checkContext = useContext(CheckboxContext);

  const handleClick = e => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Text
      htmlFor={`checkbox__${checkContext.name}${checkContext.id}`}
      className={cx({
        [styles.root]: true,
        [className]: className,
        [styles.disabled]: isDisabled || checkContext.disabled
      })}
      onClick={handleClick}
      heading5
      component="label"
      {...restProps}
    >
      {label}
    </Text>
  );
};

export default CheckLabel;
