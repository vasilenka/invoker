import styles from './Dropdown.module.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

import { ReactComponent as ExpandMore } from './icons/expand-more.svg';
import { ReactComponent as ExpandLess } from './icons/expand-less.svg';

const Dropdown = ({
  id,
  className,
  isExpanded,
  type,
  withArrow,
  small,
  ...restProps
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      <select
        id={id}
        name={id}
        className={classnames({
          [styles.normal]: !small,
          [styles.small]: small
        })}
        onClick={() => setExpanded(true)}
        onChange={() => setExpanded(false)}
      >
        <option value="">hello world</option>
        <option value="">ongki herlambang</option>
        <option value="">khairani ummah</option>
      </select>
      {withArrow ? (
        expanded ? (
          <span className={styles.arrowContainer}>
            <ExpandMore className={styles.arrow} />
          </span>
        ) : (
          <span className={styles.arrowContainer}>
            <ExpandMore className={styles.arrow} />
          </span>
        )
      ) : null}
    </div>
  );
};

export default Dropdown;
