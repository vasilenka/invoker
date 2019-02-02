import styles from './Popout.module.scss';
import React from 'react';
import cx from 'classnames';

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
  withArrow,
  className,
  ...restProps
}) => {
  let [visible, setVisible] = React.useState(false);
  const popRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const handleClick = function(e) {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    if (onClick) {
      onClick(e);
    }
  };

  React.useEffect(
    () => {
      if (document && visible) {
        document.addEventListener('mousedown', docClick, false);
        document.addEventListener('touchend', docClick, false);
      }
    },
    [visible]
  );

  const docClick = e => {
    if (
      visible &&
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target)
    ) {
      setVisible(false);
      document.removeEventListener('mousedown', docClick, false);
      document.removeEventListener('touchend', docClick, false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children(handleClick, popRef)}
      {visible && (
        <div
          ref={popRef}
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
                [styles.arrow]: withArrow,
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
