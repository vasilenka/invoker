import styles from './ComboboxItem.module.scss';
import React from 'react';
import cx from 'classnames';

const ComboboxItem = ({
  isSelected,
  isHighlighted,
  label,
  index,
  item,
  component,
  className,
  defaultClass,
  highlightedClass,
  selectedClass,
  ...restProps
}) => {
  let Component = component || 'li';

  return (
    <Component
      className={cx({
        [styles.root]: !defaultClass,
        [styles.highlighted]: !highlightedClass && isHighlighted,
        [styles.selected]: !selectedClass && isSelected,
        [defaultClass]: defaultClass,
        [highlightedClass]: isHighlighted && highlightedClass,
        [selectedClass]: isSelected && selectedClass,
        [className]: className
      })}
      {...restProps}
    >
      {label}
    </Component>
  );
};

export default ComboboxItem;
