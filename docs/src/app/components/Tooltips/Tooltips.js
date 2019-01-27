import styles from './Tooltips.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../Text/Text';

const Tooltips = ({
  children,
  message,
  large,
  top,
  onHover,
  bottom,
  left,
  right,
  className,
  ...restProps
}) => {
  let [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(true);
    if (onHover) {
      onHover();
    }
  };

  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={() => setHover(false)}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {hover && (
        <div
          className={cx({
            [styles.tooltipsContainer]: true,
            [styles.top]: !bottom && !left && !right,
            [styles.right]: right,
            [styles.middle]: false
          })}
        >
          <div
            className={cx({
              [styles.center]: top || bottom,
              [styles.tooltips]: true
            })}
          >
            <Text small className={styles.tooltipsText}>
              {message}
            </Text>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltips;
