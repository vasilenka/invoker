import styles from './Popout.module.scss';
import React from 'react';
import cx from 'classnames';
import Text from '../Text/Text';

const Popout = ({
  children,
  content,
  large,
  onClick,
  top,
  topLeft,
  topRight,
  bottom,
  bottomLeft,
  bottomRight,
  left,
  leftTop,
  leftBottom,
  right,
  rightTop,
  rightBottom,
  className,
  ...restProps
}) => {
  let [isOpen, setIsOpen] = React.useState(false);

  const handlePopout = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children(handlePopout)}
      {isOpen && (
        <div
          className={cx({
            [styles.container]: true,
            [styles.containerLeft]: topLeft || bottomLeft,
            [styles.containerRight]: topRight || bottomRight || left,
            [styles.containerCenter]: top || bottom,
            [styles.containerMiddle]: left || right
          })}
        >
          <div
            className={cx({
              [styles.popoutTop]: top || topLeft || topRight,
              [styles.popoutBottom]: bottom || bottomLeft || bottomRight,
              [styles.popoutLeft]: left || leftTop || leftBottom,
              [styles.popoutRight]: right || rightTop || rightBottom,
              [styles.popoutAlignMiddle]: left || right,
              [styles.popoutAlignTop]: leftTop || rightTop,
              [styles.popoutAlignBottom]: leftBottom || rightBottom
            })}
          >
            <div className={styles.content}>{content}</div>
            <div
              className={cx({
                [styles.arrowPositionTop]: bottom || bottomRight || bottomLeft,
                [styles.arrowPositionBottom]: top || topLeft || topRight,
                [styles.arrowPositionLeft]: right || rightTop || rightBottom,
                [styles.arrowPositionRight]: left || leftTop || leftBottom,
                [styles.arrowAlignLeft]: topLeft || bottomLeft,
                [styles.arrowAlignCenter]: top || bottom,
                [styles.arrowAlignRight]: topRight || bottomRight,
                [styles.arrowAlignTop]: leftTop || rightTop,
                [styles.arrowAlignMiddle]: left || right,
                [styles.arrowAlignBottom]: leftBottom || rightBottom
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popout;
