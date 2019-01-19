import styles from './Button.module.scss';
import React from 'react';
import classnames from 'classnames';

const Button = ({
  children,
  primary,
  onClick,
  secondary,
  secondaryAlt,
  primaryBold,
  className,
  small,
  large,
  disabled,
  ...restProps
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames({
        [styles.secondary]: secondary,
        [styles.secondaryAlt]: secondaryAlt,

        [styles.primaryMedium]: primary,
        [styles.primaryBold]: primaryBold,

        [styles.small]: !secondaryAlt && small ? true : false,
        [styles.smallAlt]: secondaryAlt && small ? true : false,
        [styles.large]: !small && !secondaryAlt ? true : false,
        [styles.largeAlt]: secondaryAlt && !small ? true : false,

        [className]: className
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
