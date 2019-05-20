import styles from './FieldInputAlt.module.scss';
import React from 'react';
import cx from 'classnames';

import * as yup from 'yup';
import { defaultShape } from './helper/fieldInputHelper';

const FIeldInputAlt = ({
  id,
  className,
  type,
  required,
  small,
  inline,
  disabled,
  value,
  setValue,
  yupShape,
  error,
  setError,
  tone,
  setTone,
  onFocus,
  onBlur,
  ...restProps
}) => {
  const validationSchema = yup
    .object()
    .shape(yupShape || defaultShape(type, required, id));

  const validateField = () => {
    validationSchema
      .validate({
        [type || 'text']: value
      })
      .then(valid => {
        if (valid) {
          setTone && setTone('');
        }
      })
      .catch(err => {
        if (err) {
          setTone && setTone('critical');
        }
      });
  };

  const handleFocus = e => {
    setTone('');
    onFocus && onFocus(e);
  };

  const handleBlur = e => {
    validateField();
    onBlur && onBlur(e);
  };

  return (
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={setValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cx({
        [styles.root]: true,
        [styles.normal]: !small,
        [styles.small]: small,
        [styles.stack]: !inline,
        [styles.inline]: inline,
        [styles[tone]]: tone,
        [styles.disabled]: disabled,
        [className]: className
      })}
      disabled={disabled}
      required={required}
      {...restProps}
    />
  );
};

export default FIeldInputAlt;
