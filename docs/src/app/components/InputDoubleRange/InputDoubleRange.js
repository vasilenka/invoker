import styles from './InputDoubleRange.module.scss';
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
  minValue,
  maxValue,
  step,
  className,
  getValueMin,
  getValueMax,
  ...restProps
}) => {
  let [minVal, setMinVal] = React.useState(minValue);
  let [maxVal, setMaxVal] = React.useState(maxValue);

  let [offsetRight, setOffsetRight] = React.useState(
    `${((max - maxVal) / max) * 100}`
  );
  let [offsetLeft, setOffsetLeft] = React.useState(
    `${((minVal - min) / max) * 100}`
  );

  React.useEffect(
    () => {
      if (getValueMin) {
        getValueMin(minVal);
      }
      if (getValueMax) {
        getValueMax(maxVal);
      }
    },
    [minVal, maxVal, offsetLeft, offsetRight]
  );

  const handleMinChange = val => {
    setMinVal(val);
    setOffsetLeft(`${((minVal - min) / max) * 100}`);
  };

  const handleMaxChange = val => {
    setMaxVal(val);
    setOffsetRight(`${((max - val) / max) * 100}`);
  };

  const styleProgress = css`
    left: ${offsetLeft}%;
    right: ${offsetRight}%;
  `;

  const styleThumbLeft = css`
    left: calc(${offsetLeft}% - 14px);
  `;

  const styleThumbRight = css`
    right: calc(${offsetRight}% - 14px);
  `;

  const styleRailLeft = css`
    position: absolute;
    padding-top: 14px;
    padding-bottom: 14px;
    background: transparent;
    height: 4px;
    top: -12px;
    right: 0;
    bottom: 0px;
    left: 0;
  `;

  const styleRailRight = css`
    position: absolute;
    padding-top: 14px;
    padding-bottom: 14px;
    background: transparent;
    height: 4px;
    top: -12px;
    right: 0;
    bottom: 0;
    left: 0;
  `;

  const styleRailLeftLine = css`
    left: 0;
    right: calc(${100 - offsetLeft}%);
  `;

  const styleRailRightLine = css`
    right: 0;
    left: calc(${100 - offsetRight}%);
  `;

  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
    >
      <RangeCore
        className={styles.container}
        css={styleRailLeft}
        percent
        onChange={val => handleMinChange(val)}
        value={minVal}
        rate={step}
        min={min}
        max={maxVal}
      >
        <div className={cx(styles.thumb)} css={styleThumbLeft}>
          {affordance && (
            <>
              <div className={styles.affordance} />
              <div className={styles.affordance} />
              <div className={styles.affordance} />
            </>
          )}
        </div>
        <div css={styleRailLeftLine} className={cx(styles.rail)} />
      </RangeCore>

      <RangeCore
        className={styles.container}
        css={styleRailRight}
        percent
        onChange={val => handleMaxChange(val)}
        value={maxVal}
        rate={step}
        min={minVal}
        max={max}
      >
        <div className={cx(styles.thumb)} css={styleThumbRight}>
          {affordance && (
            <>
              <div className={styles.affordance} />
              <div className={styles.affordance} />
              <div className={styles.affordance} />
            </>
          )}
        </div>
        <div css={styleRailRightLine} className={cx(styles.rail)} />
      </RangeCore>

      <div css={styleProgress} className={cx(styles.progress)} />
    </div>
  );
};

export default InputRange;
