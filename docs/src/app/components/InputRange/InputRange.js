import styles from './InputRange.module.scss';
import React from 'react';
import cx from 'classnames';

import RangeCore from './../RangeCore/RangeCore';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const InputRange = ({
  children,
  affordance,
  dark,
  light,
  unit,
  min,
  horizontal,
  vertical,
  max,
  value,
  maxValue,
  step,
  className,
  ...restProps
}) => {
  const thumbRef = React.useRef();

  let [val, setVal] = React.useState(value);

  let [offset, setOffset] = React.useState(
    `${100 - ((val - min) / max) * 100}`
  );

  React.useEffect(
    () => {
      // console.log('VALUE: ', val);
      // console.log('OFFSET', offset);
    },
    [val, offset]
  );

  const handleChange = val => {
    setVal(val);
    setOffset(`${100 - ((val - min) / max) * 100}`);
  };

  const styleProgress = css`
    transform: translate3d(-${offset}%, 0px, 0px);
  `;

  const styleThumb = css`
    left: calc(${100 - offset}% - 14px);
  `;

  return (
    <RangeCore
      percent
      onChange={newVal => handleChange(newVal)}
      value={val}
      rate={step}
      min={min}
      max={max}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
    >
      <div ref={thumbRef} className={cx(styles.thumb)} css={styleThumb}>
        {affordance && (
          <>
            <div className={styles.affordance} />
            <div className={styles.affordance} />
            <div className={styles.affordance} />
          </>
        )}
      </div>

      <div
        className={cx({
          [styles.progressContainer]: true,
          [styles.light]: light,
          [styles.dark]: dark
        })}
      >
        <div css={styleProgress} className={cx(styles.progress)} />
      </div>
    </RangeCore>
  );
};

export default InputRange;
