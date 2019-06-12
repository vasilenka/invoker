import styles from './Container.module.scss';
import React from 'react';
import classnames from 'classnames';

const Container = ({
  component,
  children,
  className,
  narrow,
  bleed,
  fixLeft,
  fixRight,
  ...restProps
}) => {
  let Component = component || 'div';
  let defaultStyle = !narrow && !bleed && !fixLeft && !fixRight;
  return (
    <Component
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.normal]: defaultStyle,
        [styles.narrow]: narrow,
        [styles.bleed]: bleed,
        [styles.fixLeft]: fixLeft,
        [styles.fixRight]: fixRight,
        [className]: className,
      })}
    >
      {children}
    </Component>
  );
};

export default Container;
