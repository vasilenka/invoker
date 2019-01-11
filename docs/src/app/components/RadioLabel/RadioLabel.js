import styles from './RadioLabel.module.scss';
import React, { useContext } from 'react';
import classnames from 'classnames';
import { RadioContext } from '../context/context';

import Text from './../Text/Text';

const RadioLabel = ({ children, id, className, ...restProps }) => {
  const context = useContext(RadioContext);

  return (
    <Text
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
      heading5
      component="label"
      htmlFor={`radio__${context.props.name}${id}`}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default RadioLabel;
