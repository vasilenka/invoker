import styles from './RadioLabel.module.scss';
import React, { useContext } from 'react';
import classnames from 'classnames';
import { RadioContext, RadioButtonContext } from '../context/context';

import Text from './../Text/Text';

const RadioLabel = ({ label, id, className, ...restProps }) => {
  const listContext = useContext(RadioContext);
  const buttonContext = useContext(RadioButtonContext);

  return (
    <Text
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.disabled]: buttonContext.disabled
      })}
      heading5
      component="label"
      htmlFor={`radio__${listContext.props.name}${buttonContext.index}`}
      {...restProps}
    >
      {label}
    </Text>
  );
};

export default RadioLabel;
