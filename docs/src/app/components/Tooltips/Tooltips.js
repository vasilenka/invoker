import styles from './Tooltips.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../Text/Text';

const Tooltips = ({
  children,
  arrowLeft,
  arrowCenter,
  arrowRight,
  content,
  large,
  onHover,
  top,
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
      {children}
      {hover && (
        <div
          className={cx({
            [styles.tooltipsContainer]: true,
            [styles.tooltipsContainerLeft]: arrowLeft,
            [styles.tooltipsContainerRight]: arrowRight,
            [styles.tooltipsContainerCenter]: arrowCenter
          })}
        >
          <div
            className={cx({
              [styles.tooltipsTop]: top,
              [styles.tooltipsBottom]: bottom
            })}
          >
            <div className={styles.content}>{content}</div>
            <div
              className={cx({
                [styles.arrowPositionTop]: bottom,
                [styles.arrowPositionBottom]: top,
                [styles.arrowAlignLeft]: arrowLeft,
                [styles.arrowAlignCenter]: arrowCenter,
                [styles.arrowAlignRight]: arrowRight
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltips;
