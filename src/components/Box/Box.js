import styles from './Box.module.scss';
import React from 'react';
import classnames from 'classnames';

import withDirectionProps from './../__private/withDirectionProps';
import withJustifyProps from './../__private/withJustifyProps';
import withAlignProps from './../__private/withAlignProps';

const Box = ({
  children,
  component,
  className,

  inline,

  direction,
  justify,
  align,

  ...restProps
}) => {
  let Component = component || 'div';

  return (
    <Component
      className={classnames({
        [styles.root]: !inline,
        [styles.inline]: inline,

        [styles[direction]]: direction,
        [styles[justify]]: justify,
        [styles[align]]: align,

        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Box.displayName = 'Box';

Box.defaultProps = {
  direction: 'boxRow',
  justify: 'justifyStart',
  align: 'alignCenter',
};

export default withDirectionProps(withJustifyProps(withAlignProps(Box)));
