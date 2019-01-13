import styles from './Checkmark.module.scss';
import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import { CheckboxContext } from '../context/context';

const Checkmark = ({
  id,
  name,
  large,
  value,
  isChecked,
  isDisabled,
  className,
  onHover,
  component,
  onChange,
  ...restProps
}) => {
  let Component = component ? component : 'span';

  const checkContext = useContext(CheckboxContext);
  let [disabled, setDisable] = useState(checkContext.isDisabled);
  let [checked, setChecked] = useState(isChecked);

  const handleChange = e => {
    setChecked(!checked);
    if (CheckboxContext.onChange) {
      CheckboxContext.onChange(e);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Component
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.normal]: !large,
        [styles.large]: large
      })}
      {...restProps}
    >
      <input
        className={classnames({
          [styles.box]: true,
          [styles.normal]: !large,
          [styles.large]: large
        })}
        type="checkbox"
        name={name}
        disabled={isDisabled || disabled}
        id={`checkbox__${name || checkContext.name}${id || checkContext.id}`}
        value={value}
        onChange={handleChange}
      />
      <div
        className={classnames({
          [styles.checkmark]: true,
          [styles.hoverCheckmark]: checkContext.hover,
          [styles.normal]: !large,
          [styles.large]: large,
          [styles.disabled]: isDisabled || disabled
        })}
      />
    </Component>
  );
};

export default Checkmark;
