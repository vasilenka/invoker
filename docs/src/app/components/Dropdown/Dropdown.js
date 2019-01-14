import styles from './Dropdown.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import { ReactComponent as ExpandMore } from './icons/expand-more.svg';
import { DropdownContext } from '../context/context';

const Dropdown = ({
  children,
  id,
  className,
  withArrow,
  setValue,
  onChange,
  small,
  value,
  ...restProps
}) => {
  const [selected, setSelected] = useState(value);
  let inputEl = useRef(null);

  const handleChange = e => {
    setSelected(e.target.value);
    if (setValue) {
      setValue(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(
    selected => {
      if (selected) {
        setValue(selected);
      }
    },
    [selected]
  );

  return (
    <DropdownContext.Provider value={{ selected, setSelected }}>
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
          value={selected}
          onChange={handleChange}
          {...restProps}
        >
          {children}
        </select>
        {withArrow ? (
          <span aria-hidden className={styles.arrowContainer}>
            <ExpandMore className={styles.arrow} />
          </span>
        ) : null}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
