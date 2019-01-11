import styles from './Dropdown.module.scss';
import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import { ReactComponent as ExpandMore } from './icons/expand-more.svg';
// import { ReactComponent as ExpandLess } from './icons/expand-less.svg';

const Dropdown = ({
  children,
  id,
  className,
  withArrow,
  small,
  options,
  ...restProps
}) => {
  const inputEl = useRef(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      <select
        ref={inputEl}
        id={id}
        name={id}
        className={classnames({
          [styles.normal]: !small,
          [styles.small]: small
        })}
        onClick={() => setExpanded(true)}
        onChange={() => setExpanded(false)}
        {...restProps}
      >
        {options &&
          options.map((option, index) => {
            if (Array.isArray(option.value)) {
              return (
                <optgroup key={`${index}${option.value}`} label={option.label}>
                  {option.value.map((opt, index) => (
                    <option key={`${index}${opt.value}`} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
              );
            }
            return (
              <option key={`${index}${option.value}`} value={option.value}>
                {option.label}
              </option>
            );
          })}
      </select>
      {withArrow ? (
        expanded ? (
          <span aria-hidden className={styles.arrowContainer}>
            <ExpandMore className={styles.arrow} />
          </span>
        ) : (
          <span aria-hidden className={styles.arrowContainer}>
            <ExpandMore className={styles.arrow} />
          </span>
        )
      ) : null}
    </div>
  );
};

export default Dropdown;
