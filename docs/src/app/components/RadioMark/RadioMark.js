import styles from './RadioMark.module.scss';
import React, { useContext } from 'react';
import classnames from 'classnames';
import { RadioContext, RadioButtonContext } from '../context/context';

const RadioMark = ({
  className,
  checked,
  value,
  id,
  name,
  large,
  onChange,
  onClick,
  ...restProps
}) => {
  const listContext = useContext(RadioContext);
  const buttonContext = useContext(RadioButtonContext);

  const handleChange = e => listContext.state.onChange(e.target.value);

  return (
    <input
      id={`radio__${listContext.props.name}${buttonContext.index}`}
      name={listContext.props.name}
      type="radio"
      disabled={buttonContext.disabled}
      onChange={handleChange}
      checked={checked || value === listContext.state.selected}
      value={value}
      className={classnames({
        [styles.root]: true,
        [styles.normal]: !large,
        [styles.large]: large,
        [className]: className,
        [styles.disabled]: buttonContext.disabled
      })}
      {...restProps}
    />
  );
};

export default RadioMark;
